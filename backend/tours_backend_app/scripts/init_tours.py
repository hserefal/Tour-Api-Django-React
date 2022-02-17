from tours.models import TourDate, Tour
from datetime import date


def run():
    tours = Tour.objects.all()
    tours.delete()

    tour1 = Tour(title="Erciyes Ski Tour", company="ETS",
                 description="all inclusive ski tour, 3 days 2 nights", price=1200)
    tour1.save()
   
    tourDate11 = TourDate(date=date(2022, 1, 5), tour=tour1)
    tourDate12 = TourDate(date=date(2022, 2, 1), tour=tour1)
    tourDate11.save()
    tourDate12.save()
    
    tour2 = Tour(title="Kapadokya Balloon Tour", company="DIAMOND TOUR",
                 description="all inclusive balloon tour, 2 days 1 nights", price=2500)
    tour2.save()

    tourDate21 = TourDate(date=date(2022, 2, 14), tour=tour2)
    tourDate22 = TourDate(date=date(2022, 1, 18), tour=tour2)
    tourDate21.save()
    tourDate22.save()

