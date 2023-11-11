from rest_framework import viewsets, status
from .serializers import  *
from .models import *
from rest_framework.exceptions import AuthenticationFailed
from rest_framework .views import APIView
from rest_framework.response import Response
import jwt, datetime
import json


class ProductApiView(APIView):
        def get(self,request):
                obj = Product.objects.all()
                serializer = ProductSerializer(obj,many=True)
                return Response(serializer.data,status=status.HTTP_200_OK)

      
class RegisterApi(APIView):
        def post(self,request):
                serializer = UserSerializer(data=request.data)
                serializer.is_valid(raise_exception=True)
                serializer.save()
                return Response(serializer.data)



class CartApiView(APIView):
        def get(self,request):
                obj = Cart.objects.all()
                serializer = CartSerializer(obj,many=True)
                return Response(serializer.data,status=status.HTTP_200_OK)
        def post(self,request):
                serializer = CartSerializer(data=request.data)
                if serializer.is_valid():
                        serializer.save()
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
                        serializer.save()
                        return Response(serializer.data,status=status.HTTP_201_CREATED)
                return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)


class UserApiView(APIView):

        def get(self,request):

                token = request.COOKIES.get('jwt')
                if not token:
                        raise AuthenticationFailed('Unauthenticated')
                try:
                    payload = jwt.decode(token,'secret',algorithms=['HS256'])
                except jwt.ExpiredSignatureError:
                        raise AuthenticationFailed('Unauthenticated')

                user = User.objects.filter(id=payload['id']).first()
                serializer = UserSerializer(user)
                return Response(serializer.data)   




class CommentApiView(APIView):
        def get(self,request):
                obj = Comment.objects.all()
                serializer = CommentSerializer(obj,many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
        def post(self, request):
                serializer = CommentSerializer(data=request.data)
                if serializer.is_valid():
                        serializer.save()
                        return Response(serializer.data, status=status.HTTP_201_CREATED)
                return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)




class LoginApiView(APIView):
        def post(self,request):
                email = request.data['email']
                password = request.data['password']
                user = User.objects.filter(email=email).first() #Because email is unique
        

                if user is None:
                        raise AuthenticationFailed('User is not found')

                if not user.check_password(password):
                        raise AuthenticationFailed('Incorrect password')
                

                payload = {
                'id': user.id,
                'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=50),
                'iat': datetime.datetime.utcnow()}
                token = jwt.encode(payload, 'secret', algorithm='HS256')

                response = Response()

                
                response.set_cookie(key='jwt',value=token,httponly=True)
                response.data = {
                        'jwt':token
                }

                return response





class LogoutApiView(APIView):
        def post(self,request):
                response = Response()
                response.delete_cookie("jwt")
                response.data={'message':'success'}
                return response