from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth, payments, questions, admin, adaptive

app = FastAPI(title="Global Civic AI", version="1.0.0")

# CORS - allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://global-civic-ai-frontend.onrender.com",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check
@app.get("/health")
def health():
    return {"status": "ok", "environment": "production"}

# Routers
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(payments.router, prefix="/payments", tags=["payments"])
app.include_router(questions.router, prefix="/questions", tags=["questions"])
app.include_router(admin.router, prefix="/admin", tags=["admin"])
app.include_router(adaptive.router, prefix="/adaptive", tags=["adaptive"])
