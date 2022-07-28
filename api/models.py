from django.db import models

class Reservation(models.Model):
    username = models.CharField(max_length=50)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    reservation_date = models.CharField(max_length=20)
    start_time = models.CharField(max_length=20)
    finish_time = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username + "_" + self.reservation_date
