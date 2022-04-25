from config.imports import Resource, json, mariadb
from api.APIConstants import DOCUMENTS, SUBCATEGORY_NAME, SCENARIO
from query.scenario_query import get_first_phrase, get_following_phrase
from query.guide_query import get_subcategory_id


# TODO
class Scenario(Resource):
    def get(self):
        data = "lul"
        return json.dumps(data)


# Add routes to api
def init_routes(api):
    api.add_resource(Scenario, SUBCATEGORY_NAME+SCENARIO)