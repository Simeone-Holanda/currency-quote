from django.contrib import admin
from django.urls import path, include
from accounts.views import (
    register_user, login, logout)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('quotes.urls')),
    path('auth/login', login),
    path('auth/register/', register_user),
    path('auth/logout/', logout),
]
