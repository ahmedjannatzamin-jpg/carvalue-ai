from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


model = joblib.load("car_price_model.pkl")


class CarData(BaseModel):
    brand: str
    fuel_type: str
    transmission: str
    owner_type: str
    manufacture_year: int
    mileage_km: int
    engine_cc: int
    accidents_reported: int


@app.post("/predict")
def predict(data: CarData):

    input_data = pd.DataFrame([{
        "brand": data.brand,
        "fuel_type": data.fuel_type,
        "transmission": data.transmission,
        "owner_type": data.owner_type,
        "manufacture_year": data.manufacture_year,
        "mileage_km": data.mileage_km,
        "engine_cc": data.engine_cc,
        "accidents_reported": data.accidents_reported
    }])

    prediction = model.predict(input_data)[0]

    return {
        "predicted_price": prediction
    }