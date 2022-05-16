# package imports
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# module imports
from app.util.db_connect import ping_db

# api imports
from .routers import AppCatalog, Category, Document, Scenario, Quiz

# initial FastAPI initialization
app = FastAPI()

# CORS
origins = [
    '*',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# connect all routes
app.include_router(Category.router)
app.include_router(AppCatalog.router)
app.include_router(Document.router)
app.include_router(Scenario.router)
app.include_router(Quiz.router)

# main routes
@app.get("/")
def default_route():
    return {"message" : "this is the root"}

@app.get("/db")
def get_db_tables():
    return ping_db()