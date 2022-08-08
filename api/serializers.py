from rest_framework import serializers
from .models import Reservation, Symptom
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {
            'password': {
                'write_only': True,
                'required': True,
            }
        }

class ReservationSerializer(serializers.ModelSerializer):

    created_at = serializers.DateTimeField(format='%Y-%m-%d %H:$M:%S', read_only=True)

    class Meta:
        model = Reservation
        fields = '__all__'

class SymptomSerializer(serializers.ModelSerializer):

    created_at = serializers.DateTimeField(format='%Y-%m-%d %H:$M:%S', read_only=True)

    class Meta:
        model = Symptom
        fields = '__all__'
