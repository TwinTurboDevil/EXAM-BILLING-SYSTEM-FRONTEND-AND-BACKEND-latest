from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from .models import *
from .serializers import *
from rest_framework import generics
import json
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(UserSerializer(user).data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = CustomUser.objects.filter(username=username).first()
            if user and user.check_password(password):
                # Return user data along with the success message
                user_data = {
                    'id':user.id,
                    'username': user.username,
                    'name': user.name,
                    'address': user.adress,
                    'designation': user.designation,
                    'bankaccno': user.bankaccno,
                    'phone': user.phone,
                    'dept':user.dept,
                    'email':user.email,
                    'profile_photo': user.profile_photo.url if user.profile_photo else None,
                }
                return JsonResponse({'message': 'Login successful', 'user': user_data}, status=200)
            else:
                return JsonResponse({'error': 'Invalid username or password'}, status=400)
        else:
            return JsonResponse({'error': 'Invalid input data'}, status=400)







def get_courses_by_semester(request, semester_id):
    try:
        courses = Course.objects.filter(semester_id=semester_id)
        courses_data = [{'id': course.id, 'name': course.name} for course in courses]
        return JsonResponse(courses_data, safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


def get_semesters(request):
    semesters = Semester.objects.all().values('id', 'name')
    return JsonResponse(list(semesters), safe=False)

@api_view(['POST'])
def save_evaluation(request):
    if request.method == 'POST':
        serializer = EvaluationSerializer(data=request.data)
        print(request)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Evaluation saved successfully'})
        return Response(serializer.errors, status=400)
    else:
        return Response({'error': 'Invalid request method'}, status=405)

from django.http import JsonResponse

from django.http import JsonResponse

@api_view(['DELETE'])
def delete_profile(request, user_id):
    try:
        user = CustomUser.objects.get(id=user_id)
        user.delete()
        return JsonResponse({'message': 'Profile deleted successfully'}, status=204)
    except CustomUser.DoesNotExist:
        return JsonResponse({'error': 'User not found'}, status=404)