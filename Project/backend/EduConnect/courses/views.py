from django.shortcuts import render
from rest_framework import viewsets, generics
from rest_framework.response import Response
# Create your views here.

from .models import *
from .serializers import *
# Create your views here.

class LectureList(generics.ListCreateAPIView):

    def get(self, request, name = None):
        try:
            lecture = Lecture.objects.get(title=name)
            serializer = LectureSerializer(lecture)
            return Response(serializer.data)
        except Lecture.DoesNotExist:
            return Response({'error': 'Course not found'}, status=404)


class CourseList(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer