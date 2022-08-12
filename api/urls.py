from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CreateUserView, ReservationListView, ReservationRetrieveView, ReservationViewSet, SymptomListView, SymptomRetrieveView, SymptomViewSet

router = DefaultRouter()
router.register('reservations', ReservationViewSet, basename='reservations')
router.register('symptoms', SymptomViewSet, basename='symptoms')

urlpatterns = [
    path('register/', CreateUserView.as_view(), name='register'),
    path('list-reservation/', ReservationListView.as_view(), name='list-reservation'),
    path('detail-reservation/<str:pk>', ReservationRetrieveView.as_view(), name='detail-reservation'),
    path('list-symptom/', SymptomListView.as_view(), name='list-symptom'),
    path('detail-symptom/<str:pk>', SymptomRetrieveView.as_view(), name='detail-symptom'),
    path('auth/', include('djoser.urls.jwt')),
    path('', include(router.urls)),
]
