# Generated by Django 5.0.6 on 2024-05-15 17:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('billing', '0021_customuser_adress_customuser_designation_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='dept',
            field=models.CharField(default='CSE', max_length=30),
        ),
    ]
