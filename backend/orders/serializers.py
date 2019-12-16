from rest_framework import serializers
from .models import OrderItem
from testDB.models import UserProfile
from goods.models import  Good

class ItemSerializer(serializers.ModelSerializer):
  class Meta:
    model = Good
    fields = ('id', 'title', 'description', 'price')

class OrderHistorySerializer(serializers.ModelSerializer):
  item = ItemSerializer(read_only=True)
  class Meta:
    model = OrderItem
    fields = ('id','owner','amout','item')

class UserOrdersSerializer(serializers.ModelSerializer):
  orders_history = OrderHistorySerializer(read_only=True, many=True)
  class Meta:
    model = UserProfile
    fields = ('id', 'email','username','orders_history')




class OrderItemSerializer(serializers.ModelSerializer):
  class Meta:
    model = OrderItem
    fields = ('id','owner','item','amout')