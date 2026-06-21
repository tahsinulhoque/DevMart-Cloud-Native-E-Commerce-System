from sqlalchemy.orm import Session

from app.models.user import User
from app.utils.security import hash_password


def create_user(
    db: Session,
    full_name: str,
    email: str,
    password: str
):

    existing_user = get_user_by_email(
        db,
        email
    )

    if existing_user:
        raise ValueError(
            "Email already registered"
        )

    user = User(
        full_name=full_name,
        email=email,
        password=hash_password(password)
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user


def get_user_by_email(
    db: Session,
    email: str
):
    return db.query(User).filter(
        User.email == email
    ).first()