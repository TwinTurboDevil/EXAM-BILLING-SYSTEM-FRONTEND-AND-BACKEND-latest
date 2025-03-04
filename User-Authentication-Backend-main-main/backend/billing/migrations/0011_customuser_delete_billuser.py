# Generated by Django 4.2.8 on 2024-03-30 15:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('billing', '0010_billuser_groups_billuser_is_superuser_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=150, unique=True)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('password', models.CharField(max_length=128)),
            ],
        ),
        migrations.DeleteModel(
            name='BillUser',
        ),
    ]
