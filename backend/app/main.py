from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth, payments, questions, admin, adaptive, users

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://global-civic-ai-frontend.onrender.com", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check endpoint
@app.get("/")
def root():
    return {"status": "ok"}

@app.get("/health")
def health():
    return {"status": "ok", "environment": "production"}

# Include routers
app.include_router(auth.router)
app.include_router(users.router)
app.include_router(payments.router)
app.include_router(questions.router)
app.include_router(admin.router)
app.include_router(adaptive.router)
