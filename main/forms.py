from main.models import Salts
from django import forms

class SaltsForm(forms.ModelForm):
    class Meta:
        model = Salts
        fields = '__all__'