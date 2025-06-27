from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow requests from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Weight(BaseModel):
    weight: float

@app.post("/convert-to-lbs")
def convert_to_lbs(data: Weight):
    return {"pounds": round(data.weight * 2.20462, 2)}

@app.post("/convert-to-kg")
def convert_to_kg(data: Weight):
    return {"kilograms": round(data.weight / 2.20462, 2)}