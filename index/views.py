from django.shortcuts import render
from django.http import HttpResponse
import requests
import time
import json
import re
from html.parser import HTMLParser

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


def parse_writeahead_result(content):
    ngram_header_pattern = re.compile(r'\[[A-Z]\]')

    def is_new_ngram(text):
        return ngram_header_pattern.match(text[:3]) is not None

    class WriteaheadParser(HTMLParser):
        def __init__(self):
            super().__init__()
            self.mode_tokens = {'gp_block': 'gp', 'sgp_block': 'sgp'}
            self.current_mode = None
            self.d = {}
            self.current_line_num = -1
            self.current_ngram = None
            self.has_new_ngram = False
            self.examples = []
            self.example = {}
            self.current_attrib = None

        def handle_starttag(self, tag, attrs):
            for attr, v in attrs:
                if attr == 'class':
                    self.current_attrib = v
                if attr == 'id' and v in self.mode_tokens:
                    mode = self.mode_tokens[v]
                    self.d[mode] = {}
                    self.current_mode = mode
                    self.current_ngram = None

        def handle_data(self, data):
            line_number = super().getpos()[0]
            if line_number - self.current_line_num > 1 and bool(self.example):
                self.examples.append(self.example)
                self.example = {}
            self.current_line_num = line_number
            if is_new_ngram(data):
                if self.current_ngram is not None:
                    self.d[self.current_mode][self.current_ngram].update({'examples': self.examples})
                self.examples = []
                self.example = {}
                self.has_new_ngram = True
                self.current_ngram = data
                self.d[self.current_mode].update({data: {}})
            else:
                try:
                    data = int(data)
                    if self.has_new_ngram:
                        self.d[self.current_mode][self.current_ngram] = {'count': data}
                        self.has_new_ngram = False
                    else:
                        self.example.update({self.current_attrib: data})
                except ValueError:
                    data = re.sub('[\n\t]', '', data.strip())
                    if len(data):
                        self.example.update({self.current_attrib: data})

        def handle_document_end(self):
            if bool(self.example) and self.current_ngram is not None:
                self.examples.append(self.example)
                self.d[self.current_mode][self.current_ngram].update({'examples': self.examples})

    parser = WriteaheadParser()
    parser.feed(content)
    parser.handle_document_end()
    return parser.d


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
    r = requests.get(WRITEAHEAD_API_URL.format(query), headers={'Cookie': 'show_more_exp=true'})
    dict_data = parse_writeahead_result(re.sub('\t', '', r.text))
    json_data = json.dumps(dict_data)
    return HttpResponse(content=json_data, status=r.status_code)


def getexample(request, query):
    r = requests.get(EMAILPRO_API_URL.format(query))
    return HttpResponse(content=r.text, status=r.status_code)
