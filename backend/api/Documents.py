from config.imports import Resource, json, mariadb
from api.APIConstants import SCENARIO, SUBCATEGORY_NAME
from query.document_query import get_documents
from query.guide_query import get_subcategory_id

class Documents(Resource):
    def get(self, subcategory_name):
        subcategory_id = get_subcategory_id(subcategory_name)
        data = get_documents(subcategory_id)
        return json.dumps(data)


# Add routes to api
def init_routes(api):
    api.add_resource(Documents, SUBCATEGORY_NAME+DOCUMENTS)