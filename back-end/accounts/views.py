from django.contrib import auth
from rest_framework import status
from util.validate_password import hash_password, validate_password
from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['POST'])
def register_user(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password1 = request.data.get('password')
    password2 = request.data.get('password2')

    user_exist = User.objects.filter(username=username).exists()

    if user_exist:
        return Response({"message": 'User alredy exist', 'status': '400'})
    elif User.objects.filter(email=email).exists():
        return Response({"message": 'Email alredy exist', 'status': '400'})
    elif password1 != password2:
        return Response({"message": 'Passwords must be the same', 'status': '400'})
    elif len(password1) <= 8:
        return Response({"message": 'User must be at least 8 characters. ', 'status': '400'})
    else:
        del request.data['password2']
        request.data['password'] = hash_password(password1)
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            response = {
                'message': 'User registered successfully', 'status': '201'}
            return Response(response, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password1')
    user_exist = None
    try:
        user_exist = User.objects.get(email=email)
        if not validate_password(password, user_exist.password):
            return Response({"message": 'Incorrect password', 'status': '400'})
    except User.DoesNotExist:
        return Response({"message": 'User not exist', 'status': '400'})

    auth.authenticate(username=user_exist.username, password=password)
    auth.login(request, user_exist)
    response = {"message": 'User logado successfully. ', 'status': '202'}
    return Response(response, status=status.HTTP_202_ACCEPTED)


@api_view(['GET'])
def logout(request):
    auth.logout(request)
    response = {"message": 'User logado successfully. ', 'status': '200'}
    return Response(response, status=status.HTTP_200_OK)
