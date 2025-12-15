from rest_framework.response import Response
from rest_framework.views import APIView


class APIPracticeView(APIView):
    def get(self, request, format=None):
        print(request)
        return Response({'response': 'this is my first api'})