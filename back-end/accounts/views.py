from django.contrib import auth
from rest_framework import status
from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['POST'])
def register_user(request):
    # TODO: Fazer a criptografia de senha
    print(request.data)
    username = request.data.get('username')
    email = request.data.get('email')
    password1 = request.data.get('password')
    password2 = request.data.get('password2')

    user_exist = User.objects.filter(username=username).exists()

    if user_exist:  # and len(username) > 0 and username != ''
        return Response({"message": 'User alredy exist'})
    elif User.objects.filter(email=email).exists():
        return Response({"message": 'Email alredy exist'})
    elif password1 != password2:
        return Response({"message": 'Passwords must be the same'})
    elif len(password1) <= 8:
        return Response({"message": 'User must be at least 8 characters. '})
    else:
        del request.data['password2']
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            serializer.data['status'] = '201'
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login(request):
    # TODO: verificar a senha tbm na hora de fazer o login
    email = request.data.get('email')
    password = request.data.get('password1')
    user_exist = None
    try:
        user_exist = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({"message": 'User not exist', 'status': '401'})

    auth.authenticate(username=user_exist.username, password=password)
    auth.login(request, user_exist)
    response = {"message": 'User logado successfully. ', 'status': '202'}
    return Response(response, status=status.HTTP_202_ACCEPTED)


@api_view(['GET'])
def logout(request):
    auth.logout(request)
    response = {"message": 'User logado successfully. ', 'status': '200'}
    return Response(response, status=status.HTTP_200_OK)
