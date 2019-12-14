from django.db import models
# Create your models here.
class Companys(models.Model):
  name = models.TextField(max_length=20)
  year_of_foundation = models.IntegerField(default=1970)

  def __str__(self):
    return self.name