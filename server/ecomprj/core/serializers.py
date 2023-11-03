from rest_framework import serializers
from .models import *
from drf_extra_fields.fields import Base64ImageField


class ProductSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Product
        img_fields = Base64ImageField()
        fields = '__all__'


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'


class WishListSerializer(serializers.ModelSerializer):
    class Meta:
        model = WishList
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

        