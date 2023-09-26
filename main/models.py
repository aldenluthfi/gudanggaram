from django.db import models
from django.contrib.auth.models import User

class Salts(models.Model):
    name = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    amount = models.IntegerField()
    description = models.TextField()

    def get_absolute_url(self):
        return f"/salts/{self.id}/"