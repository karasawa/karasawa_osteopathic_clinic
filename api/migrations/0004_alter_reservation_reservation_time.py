# Generated by Django 4.0.6 on 2022-08-20 00:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_reservation_reservation_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reservation',
            name='reservation_time',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
