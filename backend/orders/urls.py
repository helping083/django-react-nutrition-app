from django.urls import path
from .api import OrderViewApi,ListOrdersViewApi, UserOrdersViewApi,UserInstanceViewApi

urlpatterns = [
  path('usersList/<uuid:pk>',UserInstanceViewApi.as_view(), name='users_instance'),
  path('usersList',UserOrdersViewApi.as_view(), name='usersList'),
  path('list',ListOrdersViewApi.as_view(), name='list orders'),
  path('', OrderViewApi.as_view(), name='create order')
]