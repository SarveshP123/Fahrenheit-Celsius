import React, { useState } from 'react';
import './ferahtocelicus.css';

function Ferahtocelicus() {
  const [input, setInput] = useState();
  const [result, setResult] = useState();

  const handleInputChange = () => {
    const number = ((input - 32) * 5) / 9;
    setResult(number.toFixed(2)); 
  };

  return (
    <div className="fade-in">
      <h2>Fahrenheit to Celsius Converter</h2>
      <input
        type="number"
        placeholder="Enter Fahrenheit"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleInputChange}>Convert</button>
      <h3>Celsius: {result}</h3>
    </div>
  );
}

export default Ferahtocelicus;
