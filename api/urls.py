from django.conf.urls import url

from api.views import About, MainView


urlpatterns = [
    url(r'^api/$', view=About.as_view(), name='about_view'),
    url(r'^$', view=MainView.as_view(), name='main_view'),
]
