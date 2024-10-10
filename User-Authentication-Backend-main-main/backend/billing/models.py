from django.db import models
from django.contrib.auth.hashers import make_password, check_password

class CustomUser(models.Model):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=40, unique=True)
    password = models.CharField(max_length=128)
    adress=models.CharField(max_length=123)
    designation=models.CharField(max_length=23,default="Professor")
    phone=models.CharField(max_length=30)
    dept=models.CharField(max_length=30)
    name=models.CharField(max_length=100)
    bankaccno=models.CharField(max_length=50,default="12345678")
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    profile_photo = models.ImageField(upload_to='profile_photos/', blank=True, null=True)
    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)

    def __str__(self):
        return self.username





class Semester(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Course(models.Model):
    name = models.CharField(max_length=100)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Evaluation(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE,blank=True)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE,blank=True)
    course_teacher = models.CharField(max_length=100,blank=True)
    position = models.CharField(max_length=100,default='a',blank=True)  
    question_formulation = models.BooleanField(default=False,blank=True)
    question_moderation = models.BooleanField(default=False,blank=True)
    question_translation = models.BooleanField(default=False,blank=True)
    project_evaluation = models.BooleanField(default=False,blank=True)
    lab_exam_evaluation = models.BooleanField(default=False,blank=True)
    viva_voce_evaluation = models.BooleanField(default=False,blank=True)
    number_of_tutorial = models.IntegerField(default=0,blank=True)
    total_tutorial_answerscripts_evaluation = models.IntegerField(default=0,blank=True)
    total_semester_final_exam_answerscripts_evaluation = models.IntegerField(default=0,blank=True)
    thesis_evaluation = models.BooleanField(default=False,blank=True)
    total_thesis_evaluation = models.IntegerField(default=0,blank=True)
    exam_committee_chairman = models.BooleanField(default=False,blank=True)
    supervisor = models.BooleanField(default=False,blank=True)

    def __str__(self):
        return f"{self.course} - {self.semester}"
