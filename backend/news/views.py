from .models import News
from .serializers import NewsSerializer
from rest_framework import viewsets

class NewsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = News.objects.order_by('-published_at').all()
    serializer_class = NewsSerializer