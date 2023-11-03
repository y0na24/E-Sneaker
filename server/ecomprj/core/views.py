from rest_framework import viewsets
from django.http import JsonResponse
from .serializers import  *
from .models import *



class ProductApiView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    http_method_names = ['get']


class CartApiView(viewsets.ModelViewSet):
        queryset = Cart.objects.all()
        serializer_class = CartSerializer
        

class WishListApiView(viewsets.ModelViewSet):
        queryset = WishList.objects.all()
        serializer_class = WishListSerializer
        http_method_names = ['get']



