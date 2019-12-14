from django.db import models
from company.models import Companys
# Create your models here.
class Good(models.Model):
  TYPE_OF_NUTRITION_CHOICES = [
    ('PROTEIN', 'protein'),
    ('CREATINE', 'creatine'),
    ('BCAA', 'BCAA'),
    ('FATBURNS', 'FatBURNS'),
    ('GEINER', 'GEINER'),
  ]
  title = models.CharField(max_length=50)
  description = models.TextField(max_length=100)
  type_0f_nutrition = models.CharField(max_length=20, choices=TYPE_OF_NUTRITION_CHOICES,default='PROTEIN')
  avaiable = models.IntegerField(default=0)
  price = models.IntegerField(default=0)
  company = models.ForeignKey(Companys, on_delete=models.SET_NULL, null=True)
  is_top = models.BooleanField(default=False)
  #likes =
  #company 
  def __str__(self):
    return self.title
