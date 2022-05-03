from config.imports import Resource, json, mariadb, request
from api.APIConstants import APPS
from query.app_catalog_query import get_apps_by_platform, get_tag_id

class Apps(Resource):
    def get(self):
        page = int(request.args.get('page'))
        platform = request.args.get('platform')

        data = get_apps_by_platform(page, platform)

        return json.dumps(data)


# Add routes to api
def init_routes(api):
    api.add_resource(Apps, APPS)