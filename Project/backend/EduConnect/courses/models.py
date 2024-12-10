from django.db import models

# Create your models here.
    
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
    file = models.FileField(blank=True, null=True)  # Поле для файла

    def __str__(self):
        return self.title