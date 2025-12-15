from django.urls import path
from drf.api.views import APIPracticeView
urlpatterns = [
    path('', APIPracticeView.as_view(), name='api-drf'),
]
