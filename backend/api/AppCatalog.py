from dataclasses import dataclass
from config.imports import Resource, json, mariadb, request
from api.APIConstants import APPS, APP_ID, PLATFORMS, SEARCH, SEARCH_INPUT
from query.app_catalog_query import get_apps_by_platform, get_platform_info_by_app_id, get_info_by_app_id, search_apps_by_name, search_apps_by_tag

class Apps(Resource):
    # TODO THIS ROUTE NEEDS TESTING
    def get(self):
        page = int(request.args.get('page'))
        platform = request.args.get('platform')

        data = get_apps_by_platform(page, platform)

        return data

class AppPlatformInfo(Resource):
    def get(self, app_id):

        data = get_platform_info_by_app_id(app_id)
        return data

class AppInfo(Resource):
    def get(self, app_id):
        
        data = get_info_by_app_id(app_id)
        return data


class AppsSearch(Resource):
    def get(self, search_input):

        platform = request.args.get('platform')
        data_by_name = search_apps_by_name(search_input, platform)
        data_by_tag = search_apps_by_tag(search_input, platform)

        result_json = {
            "names": data_by_name,
            "tags": data_by_tag
        }

        return result_json

# Add routes to api
def init_routes(api):
    api.add_resource(Apps, APPS)
    api.add_resource(AppPlatformInfo, APPS + APP_ID + PLATFORMS)
    api.add_resource(AppInfo, APPS + APP_ID)
    api.add_resource(AppsSearch, APPS + SEARCH + SEARCH_INPUT)