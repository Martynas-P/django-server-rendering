from django.conf.urls import include, url

from someapp import views

urlpatterns = [
    url(r'^$', views.home_page),
    url(r'^component-a$', views.component_a),
    url(r'^square/(?P<number_to_square>\d+)$', views.square),
    url(r'^async-component$', views.async_component),
]
