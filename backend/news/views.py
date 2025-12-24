from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import News
from .serializers import NewsSerializer
from rest_framework import viewsets


class NewsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = News.objects.order_by('-published_at').all()
    serializer_class = NewsSerializer


@api_view(['GET'])
def hello_api(request):
    return Response({"message": "hello api"})

@api_view(['GET'])
def news_title_list(request):
    titles = News.objects.values_list('title', flat=True)
    return Response(titles)

@api_view(['GET'])
def latest_news(request, count):
    news = News.objects.order_by('-published_at')[:count]
    serializer = NewsSerializer(news, many=True)
    return Response(serializer.data)