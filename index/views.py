from django.shortcuts import render
from django.http import HttpResponse
import requests

LINGGLE_API_URL = 'http://ironman.nlpweb.org:8745?search={}'
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
    r = requests.get(LINGGLE_API_URL.format(query))
    return HttpResponse(content=r.text, status=r.status_code)


def writeaheadit(request, query):
    r = requests.get(WRITEAHEAD_API_URL.format(query))
    return HttpResponse(content=r.content, status=r.status_code)


def getexample(request, query):
    r = requests.get(EMAILPRO_API_URL.format(query))
    return HttpResponse(content=r.text, status=r.status_code)
