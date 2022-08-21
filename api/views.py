from .models import Reservation, Symptom
from .serializers import UserSerializer, ReservationSerializer, SymptomSerializer
from rest_framework import generics, viewsets
from django_filters.rest_framework import DjangoFilterBackend

class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = []
    authentication_classes = []

class ReservationListView(generics.ListAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['reservation_date', 'start_time', 'finish_time', 'username', 'email', 'phone_number']
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
