from django.http import HttpResponse
from django.core import serializers
from main.models import Salts

def show_xml(request):
    data = Salts.objects.all()
    return HttpResponse(serializers.serialize("xml", data), content_type="application/xml")

def show_json(request):
    data = Salts.objects.all()
    return HttpResponse(serializers.serialize("json", data), content_type="application/json")

def show_xml_by_id(request, id):
    data = Salts.objects.filter(pk=id)
    return HttpResponse(serializers.serialize("xml", data), content_type="application/xml")

def show_json_by_id(request, id):
    data = Salts.objects.filter(pk=id)
    return HttpResponse(serializers.serialize("json", data), content_type="application/json")