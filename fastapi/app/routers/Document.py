from fastapi import APIRouter, Request
from app.query.document_query import *

# route initialization
router = APIRouter(
    prefix='/documents'
)

#########################################################################
# get all documents by subcategory_id
#########################################################################
@router.get('/', tags=['documents'])
async def get_documents_by_subcategory_id(request : Request):
    subcategory_id = request.query_params['subcategory_id']
    data = query_documents_by_subcategory_id(subcategory_id)
    return data

@router.get('/test', tags=['documents'])
async def get_documents_by_subcategory_id(subcategory_id : int):
    data = query_documents_by_subcategory_id(subcategory_id)
    return data

#########################################################################
# get document by document_id
#########################################################################
@router.get('/{document_id}', tags=['documents'])
async def get_document_by_document_id(document_id : int):
    data = query_document_by_document_id(document_id)
    return data

#########################################################################
# get document information by document_id
#########################################################################
@router.get('/{document_id}/info', tags=['documents'])
async def get_document_info_by_document_id(document_id : int):
    data = query_document_info_by_document_id(document_id)
    return data