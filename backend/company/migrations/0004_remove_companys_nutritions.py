# Generated by Django 2.2.7 on 2019-12-14 20:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0003_auto_20191214_1802'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='companys',
            name='nutritions',
        ),
    ]
