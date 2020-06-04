from django.shortcuts import render
from django.http import HttpResponse
import requests
import time
import json

LINGGLE_API_URL = 'http://ironman.nlpweb.org:8745?search={}'
LINGGLE_BASED_URL = 'https://linggle.com'
WRITEAHEAD_API_URL = 'http://www.writeahead.org/add?text={}'
EMAILPRO_API_URL = 'http://lost.nlpweb.org:3440/api/mix/{}'
linggle_symbol = '_~?*/.'


def index(request):
    return render(request, 'index/index.html')


def en_index(request):
    return render(request, 'itri/index.en.html')


def itri(request):
    return render(request, 'itri/index.html')


def wordaddin(request):
    return render(request, 'wordaddin/index.html')


def writeahead(request):
    return render(request, 'writeahead/index.html')


def emailpro(request):
    return render(request, 'emailpro/index.html')

def process_linggleit_n_grams(data):
    n_grams = json.loads(data, encoding='UTF-8')['ngrams']
    total = sum([v[1] for v in n_grams])
    return [(v[0],
             {
                 'percent': round(v[1] * 100 / total, 1),
                 'count': int(f'{str(v[1])[:2]}{"0" * (len(str(v[1])) - 2)}')
             }) for v in n_grams]

def linggleit(request, query):
    if all(ch not in query for ch in linggle_symbol):
        tokens = query.split()
        if len(tokens) == 3 and ' of ' in query and query.endswith('ing'):
            query = query.replace(' of ', ' of/to ').replace(tokens[-1], tokens[-1]+'/'+tokens[-1][:-3])
        elif len(tokens) == 3 and ' to ' in query and not query.endswith('ing'):
            query = query.replace(' to ', ' ?to ').replace(tokens[-1], tokens[-1]+'/'+tokens[-1]+'ing')
        elif len(tokens) == 2 and query.endswith('ing'):
            query = query.replace(' ', ' ?to ').replace(tokens[-1], tokens[-1]+'/'+tokens[-1][:-3])
        else:
            query += ' *'+' _'*(3-query.count(' '))
    form = {'time': time.time(), 'query': query}
    r = requests.post(f'{LINGGLE_BASED_URL}/ngram/', json=form)
    if r.status_code == 200:
        n_grams = process_linggleit_n_grams(r.text)
        jsonify_n_grams = json.dumps({k[0]: k[1] for k in n_grams})
        return HttpResponse(content=jsonify_n_grams, status=r.status_code)
    else:
        return HttpResponse(content=r.text, status=r.status_code)


def writeaheadit(request, query):
    r = requests.get(WRITEAHEAD_API_URL.format(query))
    return HttpResponse(content=r.content, status=r.status_code)


def getexample(request, query):
    r = requests.get(EMAILPRO_API_URL.format(query))
    return HttpResponse(content=r.text, status=r.status_code)
