# 🚗 CarValue AI

**CarValue AI** is a machine learning-powered web application that predicts the estimated selling price of a used car based on its key features.

## 🌐 Live Demo

**[CarValue AI – Live Website](https://carvalue-ai.netlify.app/)**

## 📌 Project Overview

CarValue AI uses a trained **Ridge Regression** model to estimate used-car prices from information such as:

* Brand
* Fuel Type
* Transmission
* Owner Type
* Manufacture Year
* Mileage
* Engine Capacity
* Reported Accidents

The machine learning model was trained on a used-car price dataset and integrated into a web application through a **FastAPI backend**.

## 🧠 Machine Learning

Several regression algorithms were evaluated during development:

* Linear Regression
* Ridge Regression
* Lasso Regression
* Elastic Net
* Decision Tree
* Random Forest
* Gradient Boosting

The final model is **Ridge Regression**, selected based on its strong test performance.

### Final Model Performance

* **R² Score:** ~0.953
* **MAE:** ~1483
* **RMSE:** ~1855

The model showed a very small train-test performance gap, indicating good generalization on the test data.

## ⚙️ Tech Stack

### Machine Learning

* Python
* Pandas
* NumPy
* Scikit-learn
* Joblib

### Backend

* FastAPI
* Uvicorn
* Pydantic

### Frontend

* HTML
* CSS
* JavaScript

### Deployment

* Docker
* Railway
* Netlify

## 🔄 How It Works

```text
User enters car details
        ↓
Frontend sends data to FastAPI
        ↓
Trained Ridge model processes the data
        ↓
Predicted car price is generated
        ↓
Prediction is displayed on the website
```

## 📂 Project Structure

```text
carvalue-ai/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── image.jpg
│
├── main.py
├── car_price_model.pkl
├── Project.ipynb
├── used_car_price_prediction_dataset.csv
├── requirements.txt
├── Dockerfile
└── README.md
```

## 🎯 Key Features

* AI-powered car price prediction
* Simple and user-friendly interface
* FastAPI REST API
* Trained machine learning pipeline
* Dockerized backend
* Live cloud deployment
* Frontend and backend integration

## 🚀 Future Improvements

* Add more car features for improved predictions
* Add prediction history
* Improve model performance with additional datasets
* Add interactive charts and analytics
* Add authentication and user accounts

## 👨‍💻 Author

**Ahmad Ali**

BSc Software Engineering Student
Hazara University

---

⭐ If you find this project interesting, feel free to explore the repository and try the live demo.
