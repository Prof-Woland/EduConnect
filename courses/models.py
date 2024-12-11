from django.db import models
from users.models import UserProfile
# Create your models here.
    
def lecture_file_path(instance, filename):
    return f'lectures/{instance.course.name}/{filename}'

class Course(models.Model):
    name = models.CharField(max_length=255 , db_index=True)
    description = models.TextField()

    def __str__(self):
        return self.name
class Lecture(models.Model):
    course = models.ForeignKey(Course, on_delete=models.PROTECT, null = True)
    title = models.CharField(max_length=255)
    content = models.TextField()
    # course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='lectures')  # Связь с курсом
    #name = models.CharField(max_length=255)
    #description = models.TextField()
    file = models.FileField(upload_to=lecture_file_path,blank=True, null=True)  # Поле для файла

    def __str__(self):
        return self.title
    
class FavouriteCourses(models.Model): # Промежуточная модель для ManyToMany
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='favorite_courses')
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('user', 'course')
    

