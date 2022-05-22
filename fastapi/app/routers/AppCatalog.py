from fastapi import APIRouter, Request
from app.query.app_catalog_query import *

# route initialization
router = APIRouter(
    prefix='/apps'
)

#########################################################################
# get all apps (pagination, platform filtering included)
#########################################################################
@router.get('/', tags=['apps'])
async def get_apps_by_platform(request: Request):
    page = request.query_params['page']
    platform = request.query_params['platform']

    data = query_all_apps_by_platform(page, platform)
    return data

@router.get('/test', tags=['apps'])
async def test_get_apps_by_platform(page : int, platform):
    data = query_all_apps_by_platform(page, platform)
    return data

#########################################################################
# get the information blocks for an app
#########################################################################
@router.get('/{app_id}/details', tags=['apps'])
async def get_app_details(app_id : int):
    data = query_app_info_by_id(app_id)
    return data

#########################################################################
# get app info
#########################################################################
@router.get('/{app_id}', tags=['apps'])
async def get_app_info(app_id : int):
    data = query_app_by_id(app_id)
    data[0]['platforms'] = query_platform_info_by_app_id(app_id)
    data[0]['tags'] = query_tags_by_app_id(app_id)
    return data

#########################################################################
# search for apps by name or tag
#########################################################################
@router.get('/search', tags=['apps'])
async def get_search_results(request : Request):
    platform = request.query_params['platform']
    search_input = request.query_params['search_input']

    data_by_name = query_search_app_by_name(search_input, platform)
    data_by_tag = query_search_app_by_tag(search_input, platform)

    result_json = {
        "names": data_by_name,
        "tags": data_by_tag
    }

    return result_json

@router.get('/search/test', tags=['apps'])
async def get_search_results(search_input, platform):
    data_by_name = query_search_app_by_name(search_input, platform)
    data_by_tag = query_search_app_by_tag(search_input, platform)

    result_json = {
        "names": data_by_name,
        "tags": data_by_tag
    }

    return result_json
    