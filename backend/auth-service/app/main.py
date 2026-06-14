from fastapi import FastAPI
from app.api.routes.user import router as user_router

app = FastAPI(
    title="DevMart Auth Service",
    version="1.0.0"
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