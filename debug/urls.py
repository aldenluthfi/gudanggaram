from django.urls import path
from debug.views import show_json, show_xml, show_json_by_id, show_xml_by_id

app_name = 'debug'

urlpatterns = [
    path('json/', show_json, name='json'),
    path('xml/', show_xml, name='xml'),
    path('json/<int:id>/', show_json_by_id, name='json_by_id'),
    path('xml/<int:id>/', show_xml_by_id, name='xml_by_id'),
]