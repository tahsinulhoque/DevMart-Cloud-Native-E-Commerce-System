from fastapi import FastAPI
from sqlalchemy import text

from app.database.db import Base, engine
from app.models.product import Product
from app.api.products import router as product_router

app = FastAPI(
    title="Product Service",
    version="1.0.0",
    description="DevMart Product Service"
)

# Create database tables
Base.metadata.create_all(bind=engine)

# Register API routes
app.include_router(product_router)


@app.get("/")
def root():
    return {
        "message": "Product Service Running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


@app.get("/db-test")
def db_test():
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))

        return {
            "database": "connected"
        }

    except Exception as e:
        return {
            "database": "connection failed",
            "error": str(e)
        }