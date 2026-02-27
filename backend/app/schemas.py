from pydantic import BaseModel
from typing import Optional

# ── Question Schemas ─────────────────────────────────────────────────────────
class QuestionBase(BaseModel):
    text: str

class QuestionCreate(QuestionBase):
    pass

class Question(QuestionBase):
    id: int
    class Config:
        from_attributes = True

# ── Response Schemas ─────────────────────────────────────────────────────────
class ResponseBase(BaseModel):
    user_id: int
    question_id: int
    answer: str

class ResponseCreate(ResponseBase):
    pass

class Response(ResponseBase):
    id: int
    class Config:
        from_attributes = True

# ── User Schemas ─────────────────────────────────────────────────────────────
class UserCreate(BaseModel):
    username: str
    email: str
    password: str

class UserOut(BaseModel):
    id: int
    username: str
    email: str
    class Config:
        from_attributes = True

class UserLogin(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

from pydantic import BaseModel

class UserOut(BaseModel):
    id: int
    username: str
    email: str

    class Config:
        from_attributes = True

