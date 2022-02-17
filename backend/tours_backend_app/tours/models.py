from django.db import models

# Create your models here.
class Tour(models.Model):
    title = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    description = models.TextField()
    price = models.IntegerField()

class TourDate(models.Model):
    date = models.DateTimeField()
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE, related_name="dates")