from this import d
from fastapi import APIRouter, Request
from app.query.quiz_query import *

# route initialization
router = APIRouter(
    prefix='/quiz'
)

#########################################################################
# get all questions by subcategory_id
#########################################################################
@router.get('/', tags=['quiz'])
async def get_quiz_questions_by_subcategory_id(request : Request):
    subcategory_id = request.query_params['subcategory_id']
    data = query_quiz_questions_by_subcategory_id(subcategory_id)
    return data

@router.get('/test', tags=['quiz'])
async def get_quiz_questions_by_subcategory_id(subcategory_id : int):
    data = query_quiz_questions_by_subcategory_id(subcategory_id)
    return data

#########################################################################
# get answers by question_id
#########################################################################
@router.get('/{quiz_id}/answers', tags=['quiz'])
async def get_quiz_answers_by_quiz_id(quiz_id : int):
    data = get_answers_to_question(quiz_id)
    return data