from django.db import models
from django.contrib.auth.models import AbstractUser
from django_countries.fields import CountryField
from django.contrib.auth.models import User


# Create your models here.


class Customer(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    email = models.EmailField(unique=True, null=True)
    addres = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    avatar = models.ImageField(null=True, default = 'avatar.svg', blank = True)
    country = CountryField()
    city = models.CharField(max_length=50)
    number_of_phone = models.IntegerField(default=8)

    postcode = models.IntegerField()

    def __str__(self):
        return self.name



class Product(models.Model):
    CATEGORY_CHOICES = ( 
    ('AB','Amazon Books'),
    ('ONX', 'OnyxBoox'),
    ('PB','PocketBooks'),
    )

    title = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=7,decimal_places=2)
    description = models.TextField()
    category = models.CharField(choices=CATEGORY_CHOICES,max_length=20)
    composition = models.TextField(default='')
    product_image = models.ImageField(upload_to='product')

    def __str__(self):
        return self.title

class Cart(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=0)
    
    @property
    def total_coast(self):
        return self.quantity * self.product.price



STATUS_CHOICES = (('Принят','Принят'),('Упакован','Упакован'),('В пути','В пути'),('Доставлен','Доставлен'),('В ожидании','В ожидании'),)



class WishList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)


class OrderPlaced(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=0)
    ordered_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default = 'В ожидании')


class Comment(models.Model):
    product = models.ForeignKey(Product,related_name='comments', on_delete=models.CASCADE)
    name = models.CharField(max_length=80)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    body = models.TextField()
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created']

    def __str__(self):
        return self.body





    
    