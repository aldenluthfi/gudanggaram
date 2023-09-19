# Gudang Garam

Sebuah proyek Django sederhana sebagai Tugas Mata Kuliah Pemrograman Berbasis Platform oleh Alden Luthfi 2206028932. Proyek ini di buat dengan sistem operasi MacOS.

## Tugas 2

### Proses Pembuatan Projek Django
1. Membuat sebuah _repository_ Github baru bernama ```gudanggaram```
2. Meng-_clone repostiory_ kosong tersebut ke komputer
3. Di direktori asal Membuat _virtual environment_ Python baru dengan command:

    ```bash
    python -m venv env
    ```
4. Menyalakan _virtual environment_ Python baru dengan command:
    ```bash
    source env/bin/activate
    ```
5. Mempersiapkan _requirements_ dengan _neovim_
    ```bash
    nvim requirements.txt
    ```
    isi dari requirements.txt
    ```
    django
    gunicorn
    whitenoise
    psycopg2-binary
    requests
    urllib3
    ```
6. Meng-_install requirements_ dengan pip
    ```bash
    Python -m pip install -r requirements.txt
    ```
7. Membuat proyek Django baru dengan command:
    ```bash
    django-admin startproject gudanggaram .
    ```
8. Mengubah ```ALLOWED_HOSTS``` di file ```settings.py``` dengan menambahkan ```"*"``` agar proyek ini bisa dijalankan di host/domain apapun.

9. Membuat aplikasi ```main``` dengan command:
    ```bash
    python manage.py startapp main
    ```
10. Menambahkan nama aplikasi ke ```INSTALLED_APPS``` pada file ```settings.py``` di direktori ```gudanggaram```

11. Me-_routing_ url pada file ```urls.py``` di direktori ```guadnggaram``` sehingga isi file ```urls.py``` menjadi:
    ```python
    from django.contrib import admin
    from django.urls import path, include

    urlpatterns = [
        path('admin/', admin.site.urls),
        path('', include('main.urls')),
    ]
    ```
12. Mengubah ```models.py``` menjadi:
    ```python
    from django.db import models

    class Product(models.Model):
        name = models.CharField(max_length=255)
        amount = models.IntegerField()
        description = models.TextField()
    ```
13. Melakukan migrasi dengan command:
    ```
    python manage.py makemigrations
    python manage.py migrate
    ```
14. Membuat direktori template dan template ```html``` untuk laman ```main```:

    ```html
    <h1>{{ app_name }} Page</h1>

    <h5>Name: </h5>
    <p>{{ name }}<p>
    <h5>Class: </h5>
    <p>{{ class }}<p>
    ```
15. Menambahkan fungsi untuk me-_render_ laman main pada file ```views.py```:
    ```python
    from django.shortcuts import render

    def show_main(request):
        context = {
            'app name': 'Gudang Garam',
            'name': 'Alden Luthfi',
            'class': 'PBP B'
        }

        return render(request, "main.html", context)
    ```

16. Melakukan routing pada aplikasi ```main``` pada file ```urls.py``` di direktori main:
    ```python
    from django.urls import path
    from main.views import show_main

    app_name = 'main'

    urlpatterns = [
        path('', show_main, name='show_main'),
    ]
    ```

17. Mengetest aplikasi pada localhost dengan command:
    ```
    python manage.py runserver
    ```
    kemudian membuka ```http://localhost:8000/``` di _browser_

18. Melakukan deploy app ke situs _Adaptable_

### Jawaban dari Pertanyaan

1. **Bagan Arsitektur Django**
![](static/images/raster/bagan.png)
Terlihat bahwa _request_  dari user akan diproses terlebih dahulu sehingga dapat diteruskan ke View yang sesuai. kemudian View tersebut akan membaca/menulis data di Model dan menggunakan Template untuk menampilkan dan mengembalikan _response_ ke _user_

2. **Mengapa perlu menggunakan virtual environment untuk membuat suatu proyek**

    Sebuah _virtual environment_ memberikan kebebasan seorang _developer_ yang memiliki banyak proyek untuk menggunakan _dependency_ yang mungkin saling bertabrakan jika disatukan tanpa menggunakan _virtual environment_. Secara singkat, sebuah _virtual environment_ menghindari terjadinya konflik pada proyek, baik itu konflik versi, konflik _dependency_, dsb.

3. **Penjelasan Arsitektur MVC, MVT dan MVVM**

    **MVC**

    MVC adalah singkatan dari Model, View, dan Controller. Pada arsitektur proyek ini, tiga komponen aplikasi ini mempunyai tugas yang berbeda-beda. komponen Model bertugas untuk meng-_handle_ logic dan segala fungsionalitas yang dibutuhkan oleh _user_. komponen View
    bertugas untuk mengelola tampilan yang dilihat oleh _user_. komponen Controller
    memroses _request_  dari _user_ dengan berkomunikasi dengan Model untuk mengolah data kemudian
    berkomunikasi dengan View untuk menampilkan laman kepada _user_

    **MVT**

    MVT adalah singkatan dari Model, View, Template. Pola arsitektur ini mirip dengan pola MVC. hanya saja, yang bertugas untuk mengelolas tampilan adalah komponen Template sedangkan komponen View-lah yang bertugas untuk berkomunikasi antara
    Model dan Template.

    **MVVM**

    MVVM adalah singkatan dari Model, View, ViewModel. pada arsitektur ini, komponen ViewModel menjadi penengah antara View dan Model. Interaksi dari _user_ akan diterima oleh View dan diteruskan ke ViewModel yang akan memperbaharui Model dan meneruskan perubahan yang ada kepada masing masing View dan Model.

    **Perbedaan Antara Ketiganya**

    Perbedaan antara MVVM dan MVC/MVT mungkin jelas terlihat. Sehingga ada baiknya kita membedakan antara MVT dan MVC. Pada MVC, komponen Controllerlah yang menerima _request_  dan memberikan respons kepada _user_, Controler memanipulasi Model untuk mengambil Data kemudian meneruskannya ke View agar View bisa memproses Data dari Model dan menampilkan tampilan yang sesuai, kemudian Controller akan mengembalikan respons kepada _user_. Sedangkan pada MVT, _request_  dari _user_ akan diteruskan ke View yang bersangkutan, kemudian View akan membaca/menulis data kepada Model dan menggunakan Template untuk mengembalikan _response_ kepada _user_. Perbedaan utama pada kedua ini adalah pada MVT, seorang _developer_ tidak lagi berperan sebagai penulis logika dari Controller pada aplikasinya.

    Untuk MVVM, berbeda dari yang lain, komponen View dan komponen Model pada arsitektur ini tidak berkomunikasi sama sekali.

## Tugas 3
