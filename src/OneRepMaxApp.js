import React, { useState } from 'react';
import OneRepMaxCalc from './GenericOneRepMaxCalculator';

const OneRepMaxApp = () => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [calculatedMax, setCalculatedMax] = useState(null);

  const handleCalculate = () => {
    try {
      const parsedWeight = parseInt(weight, 10);
      const parsedReps = parseInt(reps, 10);

      if (isNaN(parsedWeight) || isNaN(parsedReps) || parsedWeight <= 0 || parsedReps <= 0) {
        throw new Error('Please enter valid positive integers for weight and reps.');
      }

      const result = OneRepMaxCalc(parsedWeight, parsedReps);
      setCalculatedMax(result);
    } catch (error) {
      console.error(error.message);
      setCalculatedMax(null);
    }
  };

  return (
    <div>
      <label>
        Weight:
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>
      <br />
      <label>
        Reps:
        <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} />
      </label>
      <br />
      <button onClick={handleCalculate}>Calculate One-Rep Max</button>
      <br />
      {calculatedMax !== null && (
        <div>
          <p>Calculated One-Rep Max: {calculatedMax}</p>
        </div>
      )}
    </div>
  );
};

export default OneRepMaxApp;
