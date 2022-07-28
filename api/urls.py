from django.urls import path, include
from rest_framework import routers
from .views import ReservationListView, ReservationRetrieveView, ReservationViewSet

router = routers.DefaultRouter()
router.register('reservations/', ReservationViewSet, basename='reservations')

urlpatterns = [
    path('list-reservation/', ReservationListView.as_view(), name='list-reservation'),
    path('detail-reservation/<str:pk>', ReservationRetrieveView.as_view(), name='detail-reservation'),
    path('auth/', include('djoser.urls.jwt')),
    path('', include(router.urls)),
]
