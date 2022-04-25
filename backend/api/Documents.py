from config.imports import Resource, json, mariadb
from api.APIConstants import SCENARIO, SUBCATEGORY_NAME, DOCUMENTS, DOCUMENT_ID
from query.document_query import get_documents, get_entries
from query.guide_query import get_subcategory_id

class Documents(Resource):
    def get(self, subcategory_name):
        print('fuck hawon')
        subcategory_id = get_subcategory_id(subcategory_name)
        data = get_documents(subcategory_id)
        # return json.dumps(data)
        return data
 
class Document(Resource):
    def get(self, subcategory_name, document_id):
        print('fuck joseph')
        document_entries = get_entries(document_id)
        # return json.dumps(document_entries)
        return document_entries

# Add routes to api
def init_routes(api):
    api.add_resource(Documents, SUBCATEGORY_NAME+DOCUMENTS)
    api.add_resource(Document, SUBCATEGORY_NAME+DOCUMENTS+DOCUMENT_ID)