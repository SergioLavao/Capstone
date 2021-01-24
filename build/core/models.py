from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.db import models

class User(AbstractUser):
	pos_x = models.FloatField(default=0)	
	pos_y = models.FloatField(default=0)	
	pos_z = models.FloatField(default=0)	

