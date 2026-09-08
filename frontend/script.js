const form = document.getElementById("predictionForm");
const predictButton = document.getElementById("predictButton");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    predictButton.textContent = "Predicting...";
    predictButton.disabled = true;

    const data = {
        brand: document.getElementById("brand").value,
        fuel_type: document.getElementById("fuel_type").value,
        transmission: document.getElementById("transmission").value,
        owner_type: document.getElementById("owner_type").value,
        manufacture_year: Number(document.getElementById("manufacture_year").value),
        mileage_km: Number(document.getElementById("mileage_km").value),
        engine_cc: Number(document.getElementById("engine_cc").value),
        accidents_reported: Number(document.getElementById("accidents_reported").value)
    };

    try {
        const response = await fetch("https://carvalue-ai-production.up.railway.app/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        document.getElementById("prediction").textContent =
            "$" + Math.round(result.predicted_price).toLocaleString();

    } catch (error) {
        console.error(error);
        alert("Backend se connection nahi ho raha.");
    }

    predictButton.textContent = "Predict Car Price";
    predictButton.disabled = false;
});
