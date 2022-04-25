from config.imports import Resource, json, mariadb
from api.APIConstants import GUIDE, CATEGORIES, CATEGORY_NAME
from query.guide_query import get_categories, get_subcategories

class Categories(Resource):
    def get(self):
        data = get_categories()
        # return json.dumps(data)
        return data

class Subcategories(Resource):
    def get(self, category_name):
        data = get_subcategories(category_name)
        # return json.dumps(data)
        return data

# Add routes to api
def init_routes(api):
    api.add_resource(Categories, GUIDE+CATEGORIES)
    api.add_resource(Subcategories, GUIDE+CATEGORY_NAME)