
from .models import Tour, TourDate
from rest_framework import serializers

class TourDateSerializer(serializers.ModelSerializer):
    class Meta:
        model=TourDate
        fields=['date']

class TourSerializer(serializers.ModelSerializer):
    dates = TourDateSerializer(many = True)    

    class Meta:
        model = Tour
        fields = ['title','company','description','price', 'dates']

