# Generated by Django 4.0.6 on 2022-08-28 06:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_reservation_reservation_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='reservation',
            name='reservation_date_sub',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
