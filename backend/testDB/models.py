import uuid
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth import get_user_model

class UserProfile(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)

class Nutrition(models.Model):
  owner = models.ForeignKey(get_user_model(),on_delete = models.CASCADE, blank=True)
  name = models.CharField(max_length=100)

  def __str__(self):
    return self.name