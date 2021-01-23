from django.views.decorators.csrf import csrf_exempt
from django.core.paginator import Paginator
from django.http import JsonResponse
from .models import User,Post

import json

def user(request, user_id):

	u = User.objects.get(id=user_id)

	own_profile = True if u == request.user else False

	following_user = u.followers.filter(id__in=f'{request.user.id}')	

	following_user = True if following_user else False	

	return JsonResponse({'username' : u.username,
	 'user_id' : u.id,
	 'followers': u.followers.count(),
	 'following': u.following.count(),
	 'own_profile' : own_profile,
	 'following_user': following_user,
	})