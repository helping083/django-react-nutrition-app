from django.urls import path
from .api import OrderViewApi,ListOrdersViewApi

urlpatterns = [
  path('list',ListOrdersViewApi.as_view(), name='list orders'),
  path('', OrderViewApi.as_view(), name='create order')
]