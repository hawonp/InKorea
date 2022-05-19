from fastapi import APIRouter, Request
from app.query.phrase_query import *

# route initialization
router = APIRouter(
    prefix='/phrases'
)

#########################################################################
# get all scenarios by subcategory_id
#########################################################################
@router.get('/', tags=['phrases'])
async def get_phrases_for_subcategory(request : Request):
    subcategory_id = request.query_params['subcategory_id']
    data = query_phrases_by_subcategory_id(subcategory_id)
    return data

@router.get('/test', tags=['phrases'])
async def get_phrases_for_subcategory(subcategory_id : int):
    data = query_phrases_by_subcategory_id(subcategory_id)
    return data


#########################################################################
# get phrase and its keywords
#########################################################################
@router.get('/{phrase_id}', tags=['phrases'])
async def get_phrase_info(phrase_id : int):
    data = query_phrase_by_phrase_id(phrase_id)
    data[0]["keywords"] = query_keywords_by_phrase_id(phrase_id)
    return data


