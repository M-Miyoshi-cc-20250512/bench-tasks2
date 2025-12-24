from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import NewsViewSet, hello_api, news_title_list, latest_news

router = DefaultRouter()
router.register(r'', NewsViewSet)

urlpatterns = [
    path('news/hello/', hello_api),
    path('news/title/', news_title_list),
    path('news/latest/<int:count>/', latest_news),
    path('news/', include(router.urls)),
]