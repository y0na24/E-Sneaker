from rest_framework import viewsets, status
from .serializers import  *
from .models import *
from rest_framework .views import APIView
from rest_framework.response import Response


class ProductApiView(APIView):
        def get(self,request):

                obj = Product.objects.all()
                serializer = ProductSerializer(obj,many=True)
                return Response(serializer.data,status=status.HTTP_200_OK)

      

class CartApiView(APIView):
        def get(self,request):
                obj = Cart.objects.all()
                serializer = CartSerializer(obj,many=True)
                return Response(serializer.data,status=status.HTTP_200_OK)
        def post(self,request):
                serializer = CartSerializer(data=request.data)
                if serializer.is_valid():
                        return Response(serializer.data,status=status.HTTP_201_CREATED)
                return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)

class WishListApiView(APIView):
        def get(self,request):
                obj = WishList.objects.all()
                serializer = WishListSerializer(obj,many=True)
                return Response(serializer.data,status=status.HTTP_200_OK)
        def post(self,request):
                serializer = WishListSerializer(data=request.data)
                if serializer.is_valid():
                        return Response(serializer.data,status=status.HTTP_201_CREATED)
                return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)


class UserApiView(APIView):
        def get(self,request):
                obj = User.objects.all()
                serializer = UserSerializer(obj,many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
        def post(self,request):
                serializer = UserSerializer(data=request.data)
                if serializer.is_valid():
                        serializer_class.save()
                        return Response(serializer.data, status=status.HTTP_201_CREATED)
                return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)



class CommentApiView(APIView):
        def get(self,request):
                obj = Comment.objects.all()
                serializer = CommentSerializer(obj,many=True)
                return Response(serializer.dat, status=status.HTTP_200_OK)
        def post(self, request):
                serializer = CommentSerializer(data=request.data)
                if serializer.is_valid():
                        serializer.save()
                        return Response(serializer.data, status=status.HTTP_201_CREATED)
                return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)
