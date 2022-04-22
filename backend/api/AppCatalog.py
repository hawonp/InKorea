from config.imports import Resource, json, mariadb, request
from api.APIConstants import APPS
from query.app_catalog_query import get_apps_wth_category_and_platform

class Apps(Resource):
    def get(self):
        page = int(request.args.get('page'))
        category = request.args.get('category')
        platform = request.args.get('platform')

        data = get_apps_wth_category_and_platform(page, category, platform)

        return json.dumps(data)


# Add routes to api
def init_routes(api):
    api.add_resource(Apps, APPS)