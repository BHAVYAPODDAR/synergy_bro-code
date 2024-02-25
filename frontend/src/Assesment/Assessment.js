import React, { useState } from "react";

const YourComponent = () => {
  const [inputData, setInputData] = useState({
    features: [
      57.0, 102.0, 13.287196, 9.509544, 25.413546, 1.552658, 11.777727, 1,
      7.5355, 37.957957, 49.858714, 7.637561, 6.649964, 1.768346, 29.00474,
    ], // Initialize with your input features
  });
  const [prediction, setPrediction] = useState("");
  const [error, setError] = useState(null);

  const LogInput = () => {
    console.log(inputData);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData), // Pass the entire inputData object
      });
      const data = await response.json();
      if (data && data["specific.disorder"]) {
        setPrediction(data["specific.disorder"]);
      } else {
        setError("Failed to get prediction");
      }
    } catch (error) {
      setError("Error predicting: " + error.message);
    }
  };

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      features: [...inputData.features, parseFloat(e.target.value)], // Assuming input is numeric
    });
  };

  return (
    <div>
      {/* Input fields for your features */}
      {/* <input type="text" placeholder="Feature 1" onChange={handleChange} />
      <input type="text" placeholder="Feature 2" onChange={handleChange} /> */}
      {/* Add more input fields as needed */}
      <button onClick={LogInput}>Log Input</button> {/* Log the input data */}
      <button onClick={handleSubmit}>Predict</button>
      {/* Display prediction */}
      {prediction && <p>Prediction: {prediction}</p>}
      {/* Display error if any */}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default YourComponent;
