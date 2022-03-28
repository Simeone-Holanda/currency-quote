from django.urls import path
from quotes import views

urlpatterns = [
    path('cotacoes/<str:coin>/<int:days>', views.consumer_api_quotation),
    path('convetion/<str:coins>', views.consumer_api_conversion_coin),
]
