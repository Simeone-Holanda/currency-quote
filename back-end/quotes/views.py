import requests
import unidecode
from util.interval_date import interval_date
from django.http.response import JsonResponse


def consumer_api_quotation(request, coin, days=20):
    api = f"https://economia.awesomeapi.com.br/json/daily/{coin}/{days}"

    dataQuotation = requests.get(api)
    dataQuotation = dataQuotation.json()
    date_extract = dataQuotation[0]['create_date'].split(' ')[0]

    response = {
        'data': [],
        'name_quotation': unidecode.unidecode(dataQuotation[0]['name']),
    }
    for quote in dataQuotation:
        data_required = {}
        for k, v in quote.items():
            if k in ['high', 'low', 'varBid']:
                data_required[k] = v
        data_required['date'] = interval_date(date_extract, days)
        days -= 1
        response['data'].append(data_required)

    return JsonResponse(response, content_type="application/json")


def consumer_api_conversion_coin(request, coins):
    api = ''
    param = ''
    if coins == 'BTC-EUR':
        api = f"https://api.kraken.com/0/public/Ticker?pair=XBTeur"
        param = 'XXBTZEUR'

    elif coins == 'BTC-USD':
        api = 'https://api.kraken.com/0/public/Ticker?pair=XBTusd'
        param = 'XXBTZUSD'
    elif coins == 'BRL-USD':
        return JsonResponse(consumer_path_usd_brl(), content_type="application/json")
    else:
        return JsonResponse({'message': 'Invalid coins.'}, content_type="application/json")

    data_convertion = requests.get(api)
    data_convertion = data_convertion.json()['result'][param]['a'][0]
    response = float(data_convertion)
    return JsonResponse({'result': round(response, 1)}, content_type="application/json")


def consumer_path_usd_brl():
    api = 'https://economia.awesomeapi.com.br/json/daily/USD-BRL/'
    data = requests.get(api).json()
    value_coin = float(data[0]['bid'])
    return {'result': round(value_coin, 3)}
