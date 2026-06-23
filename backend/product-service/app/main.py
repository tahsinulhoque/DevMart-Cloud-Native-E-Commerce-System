from fastapi import FastAPI
from sqlalchemy import text

from app.database.db import engine

app = FastAPI(
    title="Product Service",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "message": "Product Service Running"
    }


@app.get("/db-test")
def db_test():

    with engine.connect() as connection:
        result = connection.execute(text("SELECT 1"))

    return {
        "database": "connected"
    }