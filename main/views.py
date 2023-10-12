from django.shortcuts import render
from main.forms import SaltsForm
from main.models import Salts
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from hashlib import sha256

@login_required(login_url='/login')
def main_page(request):

    salts = Salts.objects.filter(user=request.user)

    context = {
        'name': request.user.username,
        'class': 'DDP B',
        'salts': salts,
        'last_login': request.COOKIES['last_login']
    }

    return render(request, "main.html", context)

def create_page(request):
    form = SaltsForm(request.POST or None)

    if request.method == "POST" and form.is_valid():
        product = form.save(commit=False)
        product.user = request.user
        product.sha256sum = sha256(f'{product.user}-{product.name}'.encode()).hexdigest()
        product.save()
        return HttpResponseRedirect(reverse('main:main_page'))

    context = {'form': form}

    return render(request, "create.html", context)

def salt_detail(request, id):
    salt = Salts.objects.get(id=id)

    context = {
        'salt': salt
    }

    return render(request, "detail.html", context)

def delete_salt(request, id):
    Salts.objects.get(id=id).delete()
    return HttpResponseRedirect(reverse('main:main_page'))