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
