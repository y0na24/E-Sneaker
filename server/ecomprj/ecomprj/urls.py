"""
URL configuration for ecomprj project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from core.views import *
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'api/product',ProductApiView,basename='product')
router.register(r'api/cart',CartApiView,basename='cart')
router.register(r'api/wishlist',WishListApiView,basename='wishlist')
router.register(r'api/comment',CommentApiView,basename='comment')
router.register(r'api/customer',CustomerApiView,basename='customer')



urlpatterns = [
    path('admin/', admin.site.urls),
    path('core/',include('core.urls')),
]
