from django.contrib import admin
from .models import News, TestItem


class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'published_at')


class TestItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'published_at')


admin.site.register(News, NewsAdmin)
admin.site.register(TestItem, TestItemAdmin)