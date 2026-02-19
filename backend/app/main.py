from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.app.routers import auth, payments, questions, admin, adaptive

app = FastAPI(title="Global Civic AI", version="1.0.0")

# ✅ CORS Fix
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://global-civic-ai-frontend.onrender.com",
        "http://localhost:3000",
        "http://localhost:3001",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check
@app.get("/health")
def health():
    return {"status": "ok", "environment": "production"}

# Include routers
app.include_router(auth.router)
app.include_router(payments.router)
app.include_router(questions.router)
app.include_router(admin.router)
app.include_router(adaptive.router)