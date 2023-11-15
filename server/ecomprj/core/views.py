from rest_framework import viewsets, status
from .serializers import  *
from .models import *
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.views import APIView
from rest_framework.response import Response
import datetime
import json
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken



class ProductApiView(APIView):
        permission_classes = ()
        authentication_classes = ()
        def get(self,request):
                obj = Product.objects.all()
                permission_classes = ()
                authentication_classes = ()
                serializer = ProductSerializer(obj,many=True)
                return Response(serializer.data,status=status.HTTP_200_OK)

      
class RegisterApi(APIView):
        def post(self,request):
                try:
                        data = request.data
                        serializer = UserSerializer(data=data)
                        if serializer.is_valid():
                                serializer.save()
                                return Response({
                                        'status':200,
                                        'message':'registration successfully check your mail',
                                        'data':serializer.data,
                                })
                        return Response({
                                'status':400,
                                'message':'Please, check entered data',
                                'data':serializer.errors,
                        })
                except Exception as x:
                        print(x)


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
                try:
                        data = request.data
                        serializers = LoginSerializer(data=data)
                        if serializers.is_valid():
                                email = serializer.data['email']
                                password = serializer.data['password']

                                user = authenticate(email=email,password=password)

                        if user is None:
                                return Response({'message':'User does not exist','status':'400','data':'{}'})
                        
                        refresh = RefreshToken.for_user(user)

                        return {
                                'refresh':str(refresh),
                                'access':str(refresh.access_token),
                        }
                        
                        return Response({
                                        'status':400,
                                        'message':'Check your entered data',
                                        'data':serializer.errors,
                                })
                                
                except Exception as x:
                        print(x)




class LogoutApiView(APIView):
        def post(self,request):
                response = Response()
                response.delete_cookie("jwt")
                response.data={'message':'success'}
                return response