from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, HttpResponseRedirect
from django.http import JsonResponse
from django.urls import reverse

from django.views.decorators.csrf import csrf_exempt

from django.shortcuts import render
from django.db import IntegrityError

from .models import AbstractUser

import logging

# Get an instance of a logger
logger = logging.getLogger(__name__)


def index(request):
    return render(request, 'index.html')

def log_in(request):
    if request.method == "POST":

        username = request.POST["username"]
        password = request.POST["password"]

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return JsonResponse({'success' : True})
        else:
	        return JsonResponse({'success': False })
    else:
        return JsonResponse({'Information':'Login request a POST'})


def getLoginState(request):
	
	responseData = { 'logged' : request.user.is_authenticated }

	return JsonResponse( responseData )	
