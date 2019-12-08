from django.contrib import admin
from .models import Nutrition, UserProfile
from django.contrib.auth.models import User

# Register your models here.
admin.site.register(Nutrition)
admin.site.register(UserProfile)