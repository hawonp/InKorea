from config.imports import Resource, json, mariadb
from api.APIConstants import DOCUMENTS, SUBCATEGORY_NAME
from query.scenario_query import get_first_phrase
from query.guide_query import get_subcategory_id, get_following_phrase

class Scenario(Resource)::TODO: implement
    def get(self):
        data = "lul"
        return json.dumps(data)


# Add routes to api
def init_routes(api):
    api.add_resource(Scenario, SUBCATEGORY_NAME+SCENARIO)