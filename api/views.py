import json

from rest_framework.views import APIView
from rest_framework.response import Response

from api.models import AboutJson


class About(APIView):
    def get(self, request, format=None):
        """
        Return a list of all users.
        """
        about_info = AboutJson.objects.get().value
        dict_info = json.loads(about_info)
        return Response(dict_info)
