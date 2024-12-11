from rest_framework import serializers

from .models import *

class CourseSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Course
        fields = '__all__'

class LectureSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Lecture
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'name', 'description']


class FavouriteCoursesSerializer(serializers.ModelSerializer):
    course = CourseSerializer() # Вложенный сериализатор для курса
    class Meta:
        model = FavouriteCourses
        fields = ['course']


class UserFavouriteCoursesSerializer(serializers.ModelSerializer):
    favourite_courses = FavouriteCoursesSerializer(many=True, read_only=True)

    class Meta:
        model = UserProfile
        fields = ['id', 'username', 'favorite_courses']