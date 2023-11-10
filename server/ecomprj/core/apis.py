from rest_framework import views, response, permissions
from . import serializers


class RegisterApi(views.APIView):
    def post(self,request):
        serializer = serializers.UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data
        print(data)


        return Response(data={'hello':'world'})