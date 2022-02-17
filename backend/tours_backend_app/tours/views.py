from django.shortcuts import render
from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Tour
from .serializers import TourSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class TourViewSet(ReadOnlyModelViewSet):
    serializer_class = TourSerializer
    queryset = Tour.objects.all()
    permission_classes = [IsAuthenticated]
