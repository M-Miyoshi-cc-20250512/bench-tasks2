from django.db import models
from datetime import datetime

class News(models.Model):
    title = models.CharField('タイトル', max_length=255)
    body = models.TextField('本文')
    published_at = models.DateTimeField('公開日', default=datetime.now)
    created_at = models.DateTimeField('作成日', auto_now_add=True)
    updated_at = models.DateTimeField('更新日', auto_now=True)

    class Meta:
        verbose_name = "お知らせ"
        verbose_name_plural = "お知らせリスト"

    def __str__(self):
        return self.title


class TestItem(models.Model):
    title = models.CharField('タイトル', max_length=255)
    published_at = models.DateTimeField('日付', default=datetime.now)

    class Meta:
        verbose_name = "テスト項目"
        verbose_name_plural = "テスト項目一覧"

    def __str__(self):
        return self.title