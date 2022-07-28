from .models import Reservation
from .serializers import UserSerializer, ReservationSerializer
from rest_framework import generics, viewsets

class ReservationListView(generics.ListAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    permission_classes = []
    authentication_classes = []

class ReservationRetrieveView(generics.RetrieveAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    permission_classes = []
    authentication_classes = []

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    permission_classes = []
    authentication_classes = []
