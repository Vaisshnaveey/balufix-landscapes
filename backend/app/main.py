from fastapi import FastAPI, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from app.database import engine, SessionLocal, Base
from app.models.lead import Lead

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------- SCHEMA ----------
class ContactForm(BaseModel):
    name: str
    email: str
    phone: str
    message: str

# ---------- DB ----------
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ---------- ROUTES ----------
@app.get("/")
def home():
    return {"message": "Balufix backend running"}

@app.post("/contact")
def submit_contact(
    form: ContactForm,
    db: Session = Depends(get_db)
):
    new_lead = Lead(
        name=form.name,
        email=form.email,
        phone=form.phone,
        message=form.message,
    )

    db.add(new_lead)
    db.commit()
    db.refresh(new_lead)

    return {
        "status": "saved",
        "id": new_lead.id
    }


@app.get("/leads")
def get_leads(db: Session = Depends(get_db)):
    leads = db.query(Lead).order_by(Lead.id.desc()).all()

    return [
        {
            "id": lead.id,
            "name": lead.name,
            "email": lead.email,
            "phone": lead.phone,
            "message": lead.message,
        }
        for lead in leads
    ]
