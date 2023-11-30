import React, { useState } from 'react';

const UserInputForm = ({ onUserInput }) => {
  const [bodyWeight, setBodyWeight] = useState('');
  const [sex, setSex] = useState('male');
  const [units, setUnits] = useState('kilograms');

  const handleSubmit = (e) => {
    e.preventDefault();
    onUserInput({ bodyWeight, sex, units }); // Pass an object with user input data
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Body Weight:
        <input type="number" value={bodyWeight} onChange={(e) => setBodyWeight(e.target.value)} />
      </label>
      <br />
      <label>
        Sex:
        <select value={sex} onChange={(e) => setSex(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <br />
      <label>
        Units:
        <select value={units} onChange={(e) => setUnits(e.target.value)}>
          <option value="kilograms">Kilograms</option>
          <option value="pounds">Pounds</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserInputForm;
