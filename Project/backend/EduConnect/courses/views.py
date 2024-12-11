from django.shortcuts import render
from rest_framework import viewsets, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
# Create your views here.

from .models import *
from .serializers import *
# Create your views here.

class LectureViewSet(viewsets.ModelViewSet):
    queryset = Lecture.objects.all()
    serializer_class = LectureSerializer
    #lookup_field = 'title'
    def get_object(self):
        queryset = self.filter_queryset(self.get_queryset())
        lookup_value = self.kwargs.get('title')
        if lookup_value is None:
             raise NotFound("Object not found")
        try:
            obj = queryset.get(title=lookup_value)
            return obj
        except queryset.model.DoesNotExist:
            raise NotFound("Object not found")
        
class CourseAPIList(generics.ListCreateAPIView):
        queryset = UserProfile.objects.all()
        serializer_class = UserFavouriteCoursesSerializer
        
class UserFavoriteCoursesViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserFavouriteCoursesSerializer


    def get_queryset(self):
        # Добавьте логику фильтрации, если необходимо
        return super().get_queryset()

    def create(self, request, *args, **kwargs):
        # Обработка добавления в избранное (POST запрос)
        user_id = request.data.get("user_id")
        course_id = request.data.get("course_id")

        if user_id and course_id:
            user = UserProfile.objects.get(pk=user_id)
            course = Course.objects.get(pk=course_id)
            try:
                FavouriteCourses.objects.create(user=user, course=course)
                return Response({"message": "Course added to favorites successfully"})
            except:
                return Response({"message": "Error adding course to favorites"})
        else:
            return Response({"message": "user_id and course_id are required"})

    def destroy(self, request, *args, **kwargs):
        # Обработка удаления из избранного
        user_id = request.data.get("user_id")
        course_id = request.data.get("course_id")

        if user_id and course_id:
            try:
              FavouriteCourses.objects.get(user_id=user_id, course_id=course_id).delete()
              return Response({"message": "Course removed from favorites successfully"})
            except FavouriteCourses.DoesNotExist:
              return Response({"message": "Course not found in favorites"})
        else:
            return Response({"message": "user_id and course_id are required"})
        

