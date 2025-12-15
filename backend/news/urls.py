from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import NewsViewSet

router = DefaultRouter()
router.register(r'', NewsViewSet)

urlpatterns = [
    path('news/', include(router.urls)),
]