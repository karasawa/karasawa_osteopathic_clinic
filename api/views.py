from .models import Reservation, Symptom
from .serializers import UserSerializer, ReservationSerializer, SymptomSerializer
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

class SymptomListView(generics.ListAPIView):
    queryset = Symptom.objects.all()
    serializer_class = SymptomSerializer
    permission_classes = []
    authentication_classes = []

class SymptomRetrieveView(generics.RetrieveAPIView):
    queryset = Symptom.objects.all()
    serializer_class = SymptomSerializer
    permission_classes = []
    authentication_classes = []

class SymptomViewSet(viewsets.ModelViewSet):
    queryset = Symptom.objects.all()
    serializer_class = SymptomSerializer
    permission_classes = []
    authentication_classes = []
