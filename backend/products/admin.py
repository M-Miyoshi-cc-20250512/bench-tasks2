from django.contrib import admin
from .models import Product, Category, Tag

# Tagモデルを管理画面に表示
admin.site.register(Tag)

# Categoryモデルを管理画面に表示
admin.site.register(Category)

# Productモデルを管理画面に表示
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    # 管理画面で表示するフィールドを指定
    list_display = ['name', 'price', 'is_published', 'category', 'created_at']
    
    # 編集画面でのフィールド順序を指定
    fieldsets = (
        (None, {
            'fields': ('name', 'price', 'description', 'is_published', 'category', 'tags', 'image')
        }),
    )

    # ManyToManyField用のインターフェイスを改善する
    filter_horizontal = ('tags',)
    
    # 管理画面で検索できるフィールド
    search_fields = ['name', 'category__name', 'tags__name']
    
    # フィルタリング機能を追加
    list_filter = ['is_published', 'category', 'tags']
