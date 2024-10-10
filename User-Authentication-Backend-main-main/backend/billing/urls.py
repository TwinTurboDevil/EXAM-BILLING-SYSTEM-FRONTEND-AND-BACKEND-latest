from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/semesters/', get_semesters, name='get_semesters'),
    path('api/register/', register, name='register'),
    path('api/login/', login, name='login'),
    path('api/semesters/<int:semester_id>/courses/', get_courses_by_semester, name='get_courses_by_semester'),
    path('api/save_evaluation/', save_evaluation, name='save_evaluation'),
    path('api/delete_profile/', delete_profile, name='delete_profile'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)