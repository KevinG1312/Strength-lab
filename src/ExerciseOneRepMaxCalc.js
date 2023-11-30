import React, { useState } from 'react';
import OneRepMaxCalc from './GenericOneRepMaxCalculator';
import { getStrengthLevel } from './StrengthAnalysis';

const Exercise = ({ name, onCalculate, userData }) => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [calculatedMax, setCalculatedMax] = useState(null);
  const [strengthLevel, setStrengthLevel] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleCalculate = () => {
    try {
      const parsedWeight = parseInt(weight, 10);
      const parsedReps = parseInt(reps, 10);

      if (
        isNaN(parsedWeight) ||
        isNaN(parsedReps) ||
        parsedWeight <= 0 ||
        parsedReps <= 0 ||
        parsedWeight !== parseFloat(weight) ||
        parsedReps !== parseFloat(reps)
      ) {
        throw new Error('Please enter valid positive integers for weight and reps.');
      }

      const result = OneRepMaxCalc(parsedWeight, parsedReps);
      setCalculatedMax(result);

      const strengthLevelResult = getStrengthLevel(name, result, userData.sex, userData.bodyWeight, userData.units);
      setStrengthLevel(strengthLevelResult);

      onCalculate(name, result);
    } catch (error) {
      console.error(error.message);
      setCalculatedMax(null);
      setStrengthLevel(null);
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <h2>{name}</h2>
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
      {strengthLevel !== null && (
        <div>
          <p>Calculated Strength Level: {strengthLevel}</p>
        </div>
      )}
      {errorMessage && (
        <div style={{ color: 'red' }}>
          <p>Error: {errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Exercise;