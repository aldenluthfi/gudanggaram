from django.shortcuts import render

def show_main(request):
    context = {
        'app_name': 'Gudang Garam',
        'name': 'Alden Luthfi',
        'class': 'PBP B'
    }

    return render(request, "main.html", context)
