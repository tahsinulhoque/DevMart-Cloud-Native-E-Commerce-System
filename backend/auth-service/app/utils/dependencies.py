from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

from jose import jwt, JWTError

from app.core.config import settings
from app.database.db import SessionLocal
from app.services.user_service import get_user_by_email

security = HTTPBearer()


def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security)
):
    token = credentials.credentials

    try:
        payload = jwt.decode(
            token,
            settings.SECRET_KEY,
            algorithms=[settings.ALGORITHM]
        )

        email = payload.get("sub")

        if email is None:
            raise HTTPException(
                status_code=401,
                detail="Invalid token"
            )

        db = SessionLocal()

        try:
            user = get_user_by_email(
                db,
                email
            )

            if not user:
                raise HTTPException(
                    status_code=401,
                    detail="User not found"
                )

            return user

        finally:
            db.close()

    except JWTError:
        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )