import os
from decimal import Decimal

import httpx
from fastapi import HTTPException
from sqlalchemy.orm import Session, selectinload

from app.models.order import Order, OrderItem
from app.schemas.order import OrderCreate


PRODUCT_SERVICE_URL = os.getenv(
    "PRODUCT_SERVICE_URL",
    "http://127.0.0.1:8001"
)


class OrderService:

    @staticmethod
    def create_order(db: Session, order_data: OrderCreate):
        try:
            total_amount = Decimal("0.00")
            order_items = []

            with httpx.Client(timeout=5.0) as client:
                for item in order_data.items:
                    response = client.get(
                        f"{PRODUCT_SERVICE_URL}/products/{item.product_id}"
                    )

                    if response.status_code == 404:
                        raise HTTPException(
                            status_code=404,
                            detail=f"Product {item.product_id} not found"
                        )

                    response.raise_for_status()
                    product = response.json()

                    unit_price = Decimal(str(product["price"]))
                    total_amount += unit_price * item.quantity

                    order_items.append(
                        OrderItem(
                            product_id=item.product_id,
                            quantity=item.quantity,
                            unit_price=float(unit_price)
                        )
                    )

        except HTTPException:
            raise

        except httpx.RequestError:
            raise HTTPException(
                status_code=503,
                detail="Product Service is unavailable"
            )

        except httpx.HTTPStatusError:
            raise HTTPException(
                status_code=502,
                detail="Product Service returned an error"
            )

        except (KeyError, ValueError, TypeError):
            raise HTTPException(
                status_code=502,
                detail="Invalid product data received"
            )

        new_order = Order(
            user_id=order_data.user_id,
            total_amount=float(total_amount),
            status="pending",
            items=order_items
        )

        try:
            db.add(new_order)
            db.commit()
            db.refresh(new_order)

            return OrderService.get_order_by_id(db, new_order.id)

        except Exception:
            db.rollback()
            raise HTTPException(
                status_code=500,
                detail="Failed to create order"
            )

    @staticmethod
    def get_all_orders(db: Session):
        return (
            db.query(Order)
            .options(selectinload(Order.items))
            .all()
        )

    @staticmethod
    def get_order_by_id(db: Session, order_id: int):
        return (
            db.query(Order)
            .options(selectinload(Order.items))
            .filter(Order.id == order_id)
            .first()
        )

    @staticmethod
    def update_order_status(
        db: Session,
        order_id: int,
        status: str
    ):
        order = (
            db.query(Order)
            .filter(Order.id == order_id)
            .first()
        )

        if not order:
            return None

        order.status = status

        try:
            db.commit()
            db.refresh(order)

            return OrderService.get_order_by_id(db, order_id)

        except Exception:
            db.rollback()
            raise HTTPException(
                status_code=500,
                detail="Failed to update order"
            )

    @staticmethod
    def delete_order(db: Session, order_id: int):
        order = (
            db.query(Order)
            .filter(Order.id == order_id)
            .first()
        )

        if not order:
            return None

        try:
            db.delete(order)
            db.commit()

            return order

        except Exception:
            db.rollback()
            raise HTTPException(
                status_code=500,
                detail="Failed to delete order"
            )