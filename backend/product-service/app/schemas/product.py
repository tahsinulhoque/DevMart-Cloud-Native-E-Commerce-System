from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict, Field


class ProductBase(BaseModel):
    name: str = Field(..., min_length=2, max_length=255)

    description: Optional[str] = Field(
        default=None,
        max_length=1000
    )

    price: float = Field(..., gt=0)

    stock: int = Field(default=0, ge=0)

    image_url: Optional[str] = Field(default=None)


class ProductCreate(ProductBase):
    pass


class ProductUpdate(BaseModel):
    name: Optional[str] = Field(default=None, min_length=2, max_length=255)

    description: Optional[str] = Field(default=None, max_length=1000)

    price: Optional[float] = Field(default=None, gt=0)

    stock: Optional[int] = Field(default=None, ge=0)

    image_url: Optional[str] = Field(default=None)


class ProductResponse(ProductBase):
    id: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )