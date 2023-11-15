from django.urls import path
from django.conf import settings
from django.contrib.auth import views as auth_view
from .views import *
from django.urls import path

urlpatterns = [
    path('api/product',ProductApiView.as_view()),
    path('api/cart',CartApiView.as_view()),
    path('api/comment',CommentApiView.as_view()),
    path('api/user',UserApiView.as_view()),
    path('api/register',RegisterApi.as_view(),name='register'),
    path('api/login',LoginApiView.as_view(),name='login'),
    path('api/logout',LogoutApiView.as_view(),name='logout'),
]