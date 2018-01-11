from django.conf.urls import url

from api.views import About


urlpatterns = [
    url(r'^$', view=About.as_view(), name='main_view'),
]
