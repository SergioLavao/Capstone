from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('API/LoginState', views.getLoginState, name='API1'),
    path('API/Login', views.log_in, name='API2'),
]