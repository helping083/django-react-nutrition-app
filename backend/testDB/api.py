from rest_framework import generics 
from rest_framework.views import APIView
from .models import Nutrition, UserProfile 
from .serializers import NutritionSerializer, UserSerializer, UserSomeSerializer
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.authtoken.models import Token
import pdb
import json
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
class TestNutrition(generics.ListAPIView):
  queryset = Nutrition.objects.all()
  serializer_class = NutritionSerializer

class UserCreate(generics.CreateAPIView):
    authentication_classes = ()
    permission_classes = ()
    serializer_class = UserSerializer

class LoginView(APIView):
    permission_classes = ()

    def post(self, request,):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username, password=password)
        
        if user:
            token, created = Token.objects.get_or_create(user=user)
            data = {"token": token.key,"expirationDate": 1000, 'userID': user.id}
            return Response(data)
        else:
            return Response({"error": "Wrong Credentials"}, status=status.HTTP_400_BAD_REQUEST)
@permission_classes((permissions.AllowAny,))
class JustView(APIView):
    def get(self, request):
        user_data = UserProfile.objects.all()
        data = UserSomeSerializer(user_data, many=True).data
        return Response(data)
@permission_classes((permissions.AllowAny,))
class InitHome(APIView):
    def get (self,request):
        user_data = UserProfile.objects.all()
        user_serialize = UserSomeSerializer(user_data, many=True).data
        nutrition_data = Nutrition.objects.all()
        nutrition_serialize = NutritionSerializer(nutrition_data, many=True).data
        return Response({'users':user_serialize, 'nutritions': nutrition_serialize})