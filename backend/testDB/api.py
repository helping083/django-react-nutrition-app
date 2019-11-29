from rest_framework import generics
from .models import Nutrition
from .serializers import NutritionSerializer

class TestNutrition(generics.ListAPIView):
  queryset = Nutrition.objects.all()
  serializer_class = NutritionSerializer