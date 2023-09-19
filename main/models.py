from django.db import models

class Salts(models.Model):
    name = models.CharField(max_length=255)
    amount = models.IntegerField()
    description = models.TextField()

    def get_absolute_url(self):
        return f"/salts/{self.id}/"