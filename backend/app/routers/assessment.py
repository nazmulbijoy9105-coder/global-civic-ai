from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app import database, models, schemas

router = APIRouter(
    prefix="/assessment",
    tags=["assessment"]
)

# ✅ Get all questions
@router.get("/questions", response_model=List[schemas.Question])
def get_questions(db: Session = Depends(database.get_db)):
    return db.query(models.Question).all()

# ✅ Submit responses
@router.post("/responses", response_model=List[schemas.Response])
def submit_responses(responses: List[schemas.ResponseCreate], db: Session = Depends(database.get_db)):
    saved_responses = []
    for r in responses:
        response = models.Response(
            user_id=r.user_id,
            question_id=r.question_id,
            answer=r.answer
        )
        db.add(response)
        db.commit()
        db.refresh(response)
        saved_responses.append(response)
    return saved_responses

# ✅ Get assessment profile for a user
@router.get("/", response_model=dict)
def get_assessment(user_id: int, db: Session = Depends(database.get_db)):
    # Example: aggregate responses into a simple profile
    responses = db.query(models.Response).filter(models.Response.user_id == user_id).all()
    profile = {"user_id": user_id, "total_responses": len(responses)}
    # TODO: add scoring logic here
    return profile