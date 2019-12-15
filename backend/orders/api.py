from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView, ListAPIView
from .serializers import OrderItemSerializer
from .models import OrderItem
class OrderViewApi(CreateAPIView):
  queryset = OrderItem.objects.all()
  serializer_class = OrderItemSerializer
  def create(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data, many=isinstance(request.data,list))
    serializer.is_valid(raise_exception=True)
    self.perform_create(serializer)
    headers = self.get_success_headers(serializer.data)
    return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class ListOrdersViewApi(ListAPIView):
  queryset = OrderItem.objects.all()
  serializer_class = OrderItemSerializer