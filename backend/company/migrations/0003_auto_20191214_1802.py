# Generated by Django 2.2.7 on 2019-12-14 15:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0002_companys_nutritions'),
    ]

    operations = [
        migrations.AlterField(
            model_name='companys',
            name='nutritions',
            field=models.ManyToManyField(blank=True, to='goods.Good'),
        ),
    ]
