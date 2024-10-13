function calculate() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    const results = document.getElementById("results");

    if (!weight || !height) {
        results.innerHTML = "Please enter valid values for both weight and height.";
        results.classList.add("show");
        return;
    }

    weight = parseFloat(weight);
    height = parseFloat(height) / 100; // Convert height to meters

    if (weight <= 0 || height <= 0) {
        results.innerHTML = "Please enter positive values.";
        results.classList.add("show");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    let measure;

    if (bmi <= 18.4) {
        measure = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        measure = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        measure = "Overweight";
    } else {
        measure = "Obese";
    }

    results.innerHTML = `Your BMI is ${bmi}, which means you are ${measure}.`;
    results.classList.add("show");
}
