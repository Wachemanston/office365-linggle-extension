"""linggle URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""

from django.conf.urls import include, url
from django.contrib import admin
from index.views import itri, en_index, wordaddin, emailpro, writeahead
from index.views import linggleit, writeaheadit, getexample

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # url(r'^accounts/', include('allauth.urls')),
    url(r'^$', itri),
    url(r'^itri/', itri),
    url(r'^en/', en_index),
    url(r'^wordaddin/', wordaddin),
    url(r'^emailpro/', emailpro),
    url(r'^writeahead/', writeahead),
    url(r'^query/(?P<query>.+)', linggleit),
    url(r'^pg/(?P<query>.*)', writeaheadit),
    url(r'^example/(?P<query>.+)', getexample)
]
