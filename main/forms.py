from main.models import Salts
from django import forms
from django.contrib.auth.models import User

class SaltsForm(forms.ModelForm):
    class Meta:
        model = Salts
        fields = '__all__'

    user = forms.ModelChoiceField(queryset=User.objects.all(), required=True)