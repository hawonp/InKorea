from http.client import TEMPORARY_REDIRECT
from fastapi import APIRouter
from app.query.category_query import query_all_categories, query_all_subcategories_by_cat_id
from app.query.document_query import query_documents_by_subcategory_id

router = APIRouter(
    prefix='/categories'
)

@router.get('/', tags=['categories'])
async def get_categories():
    data = query_all_categories()

    for temp in data:
        # print(temp)
        category_id = temp['category_id']
        subcategories = query_all_subcategories_by_cat_id(int(category_id))
        temp['subcategories'] = subcategories
    return data

@router.get('/{category_id}', tags=['categories'])
async def get_all_subcategory_by_category_id(category_id : int):
    data = query_all_subcategories_by_cat_id(catagory_id=category_id)
    return data

