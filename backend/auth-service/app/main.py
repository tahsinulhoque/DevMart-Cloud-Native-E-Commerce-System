from fastapi import FastAPI

from app.api.routes.user import router as user_router
from app.database.base import Base
from app.database.db import engine

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="DevMart Auth Service",
    version="1.0.0"
)

app.include_router(
    user_router,
    prefix="/api/users",
    tags=["Users"]
)

@app.get("/")
def root():
    return {
        "message": "DevMart Auth Service Running"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }