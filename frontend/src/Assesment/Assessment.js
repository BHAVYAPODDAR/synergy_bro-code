import React, { useState } from "react";

const Assessment = () => {
  const [output, setOutput] = useState("");

  const sendDataToAPI = async () => {
    const inputData = [
      57.0, 102.0, 13.287196, 9.509544, 25.413546, 1.552658, 11.777727, 1,
      7.5355, 37.957957, 49.858714, 7.637561, 6.649964, 1.768346, 29.00474,
    ]; // Your input data
    const response = await fetch("http://localhost:5000/process_data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    });
    const responseData = await response.json();
    setOutput(responseData.output);
  };

  return (
    <div>
      <button onClick={sendDataToAPI}>Send Data</button>
      <p>Output: {output}</p>
    </div>
  );
};

export default Assessment;
