from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer

# すべてのプロダクトを取得するエンドポイント
class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# 特定のプロダクトを取得するエンドポイント
class ProductDetailAPIView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'id'  # URLから取得するフィールド