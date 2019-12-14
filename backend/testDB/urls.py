from django.urls import path
from .api import TestNutrition, UserCreate, LoginView
from rest_framework import  routers


urlpatterns = [
    path("login/", LoginView.as_view(), name="logissssn"),
    path("users/", UserCreate.as_view(), name="user_create"),
    path('', TestNutrition.as_view(), name='nutritions')
]