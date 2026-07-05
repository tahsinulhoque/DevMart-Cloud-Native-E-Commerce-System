from sqlalchemy.orm import Session

from app.models.product import Product
from app.schemas.product import ProductCreate, ProductUpdate


class ProductService:

    @staticmethod
    def create_product(db: Session, product: ProductCreate):

        new_product = Product(
            name=product.name,
            description=product.description,
            price=product.price,
            stock=product.stock,
            image_url=product.image_url
        )

        db.add(new_product)
        db.commit()
        db.refresh(new_product)

        return new_product


    @staticmethod
    def get_all_products(db: Session):

        return db.query(Product).all()


    @staticmethod
    def get_product_by_id(db: Session, product_id: int):

        return db.query(Product).filter(
            Product.id == product_id
        ).first()


    @staticmethod
    def update_product(
        db: Session,
        product_id: int,
        product: ProductUpdate
    ):

        existing_product = db.query(Product).filter(
            Product.id == product_id
        ).first()

        if not existing_product:
            return None

        update_data = product.model_dump(exclude_unset=True)

        for key, value in update_data.items():
            setattr(existing_product, key, value)

        db.commit()
        db.refresh(existing_product)

        return existing_product


    @staticmethod
    def delete_product(db: Session, product_id: int):

        existing_product = db.query(Product).filter(
            Product.id == product_id
        ).first()

        if not existing_product:
            return None

        db.delete(existing_product)
        db.commit()

        return existing_product