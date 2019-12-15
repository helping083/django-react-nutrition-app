from django.db import models
from testDB.models import UserProfile
from goods.models import  Good
# Create your models here.
class OrderItem(models.Model):
  owner = models.ForeignKey(UserProfile,on_delete = models.CASCADE,)
  item = models.ForeignKey(Good, on_delete=models.CASCADE)
  amout = models.IntegerField(default=1)
  
  def __str__(self):
    return '{} {}'.format(self.item, self.amout)
