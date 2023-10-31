from django.db import models
from django.contrib.auth.models import AbstractUser
from django_countries.fields import CountryField


# Create your models here.


class User(AbstractUser):
    name = models.CharField(max_length=200, null=True)
    email = models.EmailField(unique=True, null=True)
    addres = models.CharField(max_length=200)

    avatar = models.ImageField(null=True, default = 'avatar.svg')
    country = CountryField()
    city = models.CharField(max_length=50)

    postcode = models.IntegerField()


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    def __str__(self):
        return self.name



class Product(models.Model):
    CATEGORY_CHOICES = ( 
    ('AB','Amazon Books'),
    ('ONX', 'OnyxBoox'),
    ('DB','Digma'),
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
    quantity = models.PositiveIntegerField(default=1)





    
    