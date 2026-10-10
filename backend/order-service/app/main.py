from fastapi import FastAPI
from sqlalchemy import text

from app.database.db import Base, engine
from app.models.order import Order, OrderItem
from app.api.orders import router as order_router


app = FastAPI(
    title="Order Service",
    version="1.0.0",
    description="DevMart Order Service"
)


Base.metadata.create_all(bind=engine)

app.include_router(order_router)


@app.get("/")
def root():
    return {"message": "Order Service Running"}


@app.get("/health")
def health():
    return {"status": "healthy"}


@app.get("/db-test")
def db_test():
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))

        return {"database": "connected"}

    except Exception:
        return {"database": "connection failed"}