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
    data = query_scenarios_by_subcategory_id(subcategory_id)
    return data

@router.get('/test', tags=['scenario'])
async def get_scenario_head_for_subcategory(subcategory_id : int):
    data = query_scenarios_by_subcategory_id(subcategory_id)
    return data

#########################################################################
# get child node
#########################################################################
@router.get('/{phrase_id}/children', tags=['scenario'])
async def get_child_nodes(phrase_id : int):
    data = query_children_for_node(phrase_id)
    return data