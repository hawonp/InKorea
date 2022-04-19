from config.imports import Resource, json, mariadb
from query.dev_query import say_hello

class Dev(Resource):
    def get(self):
        return say_hello()


# Add routes to api
def init_routes(api):
    api.add_resource(Dev, '/dev')