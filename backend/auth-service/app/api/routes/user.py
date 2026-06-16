from fastapi import APIRouter
from sqlalchemy.orm import Session

from app.database.db import SessionLocal
from app.schemas.user import (
    UserCreate,
    UserResponse,
    UserLogin
)
from app.services.user_service import create_user

router = APIRouter()


@router.post(
    "/register",
    response_model=UserResponse
)
def register(user: UserCreate):

    db: Session = SessionLocal()

    try:
        return create_user(
            db,
            user.full_name,
            user.email,
            user.password
        )

    finally:
        db.close()


@router.post("/login")
def login(user: UserLogin):

    return {
        "message": "Login endpoint working"
    }