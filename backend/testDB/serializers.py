from rest_framework import serializers
from .models import Nutrition, UserProfile
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
import pdb
class NutritionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Nutrition
    fields = ('id','owner','name')


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserProfile
        fields = ('username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user =  UserProfile(email=validated_data['email'],username=validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()
        Token.objects.create(user=user)
        return user