from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session

from app.database.db import SessionLocal

from app.schemas.user import (
    UserCreate,
    UserResponse,
    UserLogin,
    Token
)

from app.services.user_service import (
    create_user,
    get_user_by_email
)

from app.utils.security import verify_password
from app.utils.jwt import create_access_token
from app.utils.dependencies import get_current_user

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


@router.post(
    "/login",
    response_model=Token
)
def login(user: UserLogin):

    db: Session = SessionLocal()

    try:

        db_user = get_user_by_email(
            db,
            user.email
        )

        if not db_user:
            raise HTTPException(
                status_code=401,
                detail="Invalid credentials"
            )

        if not verify_password(
            user.password,
            db_user.password
        ):
            raise HTTPException(
                status_code=401,
                detail="Invalid credentials"
            )

        access_token = create_access_token(
            {
                "sub": db_user.email
            }
        )

        return {
            "access_token": access_token,
            "token_type": "bearer"
        }

    finally:
        db.close()


@router.get("/me")
def get_me(
    current_user: str = Depends(get_current_user)
):
    return {
        "email": current_user
    }