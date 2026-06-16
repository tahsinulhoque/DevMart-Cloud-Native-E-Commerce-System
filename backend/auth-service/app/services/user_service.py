from sqlalchemy.orm import Session

from app.models.user import User
from app.utils.security import hash_password


def create_user(
    db: Session,
    full_name: str,
    email: str,
    password: str
):
    user = User(
        full_name=full_name,
        email=email,
        password=hash_password(password)
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user