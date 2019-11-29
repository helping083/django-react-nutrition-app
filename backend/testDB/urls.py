from django.urls import path
from .api import TestNutrition

urlpatterns = [
    path('', TestNutrition.as_view(), name='nutritions')
]