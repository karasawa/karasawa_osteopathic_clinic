from django.db import models

class Reservation(models.Model):
    username = models.CharField(max_length=50)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    reservation_date = models.CharField(max_length=20)
    reservation_time = models.CharField(max_length=20, null=True, blank=True)
    start_time = models.CharField(max_length=20)
    finish_time = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username + "_" + self.reservation_date

class Symptom(models.Model):
    body_part = models.CharField(max_length=50)
    small_introduction = models.TextField()
    big_introduction = models.TextField()
    cause = models.TextField()
    solution = models.TextField()
    image = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body_part + "の痛み"

