from fastapi import APIRouter, Request
from app.query.scenario_query import *

# route initialization
router = APIRouter(
    prefix='/scenario'
)

#########################################################################
# get all scenarios by subcategory_id
#########################################################################
@router.get('/', tags=['scenario'])
async def get_scenario_head_for_subcategory(request : Request):
    subcategory_id = request.query_params['subcategory_id']
    data = query_scenario_root_id(subcategory_id)
    return data

@router.get('/test', tags=['scenario'])
async def get_scenario_head_for_subcategory(subcategory_id : int):
    data = query_scenario_root_id(subcategory_id)
    return data


#########################################################################
# get child node
#########################################################################
@router.get('/{phrase_id}/children', tags=['scenario'])
async def get_child_nodes(phrase_id : int):
    data = query_current_children(phrase_id)
    return data


#########################################################################
# get phrase by id
#########################################################################
@router.get('/{phrase_id}', tags=['scenario'])
async def get_phrase_by_id(phrase_id : int):
    data = query_phrase_by_id(phrase_id)
    return data