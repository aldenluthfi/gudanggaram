from django.urls import path
from main.views import main_page, create_page, delete_salt

app_name = 'main'

urlpatterns = [
    path('', main_page, name='main_page'),
    path('create/', create_page, name='create'),
    path('delete/<int:id>/', delete_salt, name='delete'),
    path('salts/<int:id>/', main_page, name='salt_detail'),
]