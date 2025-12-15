from django.contrib import admin
from .models import News

class NewsAdmin(admin.ModelAdmin):
    # 一覧表示に必要なフィールドを指定
    list_display = ('title', 'published_at') 
    
admin.site.register(News, NewsAdmin)