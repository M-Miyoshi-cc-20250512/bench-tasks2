from django.urls import path
from .views import ProductListAPIView, ProductDetailAPIView

urlpatterns = [
    # プロダクト一覧を取得するエンドポイント
    path('products/', ProductListAPIView.as_view(), name='product-list'),

    # 特定のプロダクトを取得するエンドポイント
    path('products/<int:id>/', ProductDetailAPIView.as_view(), name='product-detail'),
]