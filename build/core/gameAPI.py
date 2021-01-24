from django.views.decorators.csrf import csrf_exempt
from django.core.paginator import Paginator
from django.http import JsonResponse
from .models import User,Post

import json

def user(request, user_id):

	u = User.objects.get(id=user_id)

	own_profile = True if u == request.user else False

	return JsonResponse({'username' : u.username,
	 'user_id' : u.id,
	 'own_profile' : own_profile
	})