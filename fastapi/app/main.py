# package imports
from typing import Optional
from fastapi import FastAPI
import mariadb 

# module imports
from app.util.db_connect import ping_db

# api imports
from .routers import AppCatalog, Category, Document, Scenario, Quiz

# initial FastAPI initialization
app = FastAPI()

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