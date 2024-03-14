// RoutineGenerator.js
import html2pdf from 'html2pdf.js';
import React, { useRef, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import FiveThreeOneRoutine from './FiveThreeOneRoutine';
import OneRepMaxCalc from './GenericOneRepMaxCalculator';
import MadCow5x5Routine from './Madcow5x5Routine';
import TexasMethodRoutine from './TexasMethodRoutine';


const PDFContent = ({ selectedRoutine, userMaxes, selectedUnit }) => {
  //Decides content of PDF after user input and choice
  switch (selectedRoutine) {
    case 'Texas Method':
      return (
      <div> <TexasMethodRoutine userMaxes={userMaxes} selectedUnit={selectedUnit} />;
      </div> )
    case '5/3/1':
        return(
          <div><FiveThreeOneRoutine userMaxes={userMaxes} selectedUnit={selectedUnit}/>;</div>
        )
    case 'Madcow 5x5':
          return (
            <div><MadCow5x5Routine userMaxes={userMaxes} selectedUnit={selectedUnit}/>;</div>
          )

    

    default:
      return null;
  }
};


const RoutineGenerator = () => {
  //Sets user inputs
  const [selectedRoutine, setSelectedRoutine] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('KG'); 
  const [userInputs, setUserInputs] = useState({
    bench: { weight: 0, reps: 0 },
    deadlift: { weight: 0, reps: 0 },
    squat: { weight: 0, reps: 0 },
    overheadPress: { weight: 0, reps: 0 },
    bentOverRow: { weight: 0, reps: 0 },
  });
  const pdfElementRef = useRef();

  const handleRoutineChange = (routine) => {
    setSelectedRoutine(routine);
  };

  const handleInputChange = (exercise, property, value) => {
    
    const intValue = parseInt(value, 10);
    if (!Number.isInteger(intValue) || intValue <= 0) {
      
      console.error(`Invalid input for ${exercise}.${property}: ${value}`);
      return;
    }

    setUserInputs((prevInputs) => ({
      ...prevInputs,
      [exercise]: {
        ...prevInputs[exercise],
        [property]: intValue,
      },
    }));
  };

  const generatePDF = async () => {
    //Generrate PDF using the user maxes 
    const userMaxes = {
      bench: OneRepMaxCalc(userInputs.bench.weight, userInputs.bench.reps),
      deadlift: OneRepMaxCalc(userInputs.deadlift.weight, userInputs.deadlift.reps),
      squat: OneRepMaxCalc(userInputs.squat.weight, userInputs.squat.reps),
      overheadPress: OneRepMaxCalc(userInputs.overheadPress.weight, userInputs.overheadPress.reps),
      bentOverRow: OneRepMaxCalc(userInputs.bentOverRow.weight, userInputs.bentOverRow.reps),
    };

    // Get the HTML content of the selected routine
    const routineContent = ReactDOMServer.renderToStaticMarkup(
      <PDFContent selectedRoutine={selectedRoutine} userMaxes={userMaxes} selectedUnit={selectedUnit} />
    );

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = routineContent;

    await new Promise((resolve) => setTimeout(resolve, 500));

    html2pdf(tempDiv, {
      margin: 10,
      filename: 'workout_plan.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    });
  };

  return (
    <div>
      <label>
        Select Routine:
        <select value={selectedRoutine} onChange={(e) => handleRoutineChange(e.target.value)}>
          <option value="">Select Routine</option>
          <option value="Texas Method">Texas Method</option>
          <option value="5/3/1">5/3/1</option>
          <option value="Madcow 5x5">Madcow 5x5</option>
        </select>
      </label>
      <label>
        Select Unit:
        <select value={selectedUnit} onChange={(e) => setSelectedUnit(e.target.value)}>
          <option value="KG">KG</option>
          <option value="lbs">Pounds</option>
        </select>
      </label>

      <div>
        <label>Bench Press:</label>
        <input
          type="number"
          value={userInputs.bench.weight}
          onChange={(e) => handleInputChange('bench', 'weight', e.target.value)}
          placeholder="Weight"
        />
        <input
          type="number"
          value={userInputs.bench.reps}
          onChange={(e) => handleInputChange('bench', 'reps', e.target.value)}
          placeholder="Reps"
        />
      </div>

      <div>
        <label>Deadlift:</label>
        <input
          type="number"
          value={userInputs.deadlift.weight}
          onChange={(e) => handleInputChange('deadlift', 'weight', e.target.value)}
          placeholder="Weight"
        />
        <input
          type="number"
          value={userInputs.deadlift.reps}
          onChange={(e) => handleInputChange('deadlift', 'reps', e.target.value)}
          placeholder="Reps"
        />
      </div>
      <div>
        <label>Overhead Press:</label>
        <input
          type="number"
          value={userInputs.overheadPress.weight}
          onChange={(e) => handleInputChange('overheadPress', 'weight', e.target.value)}
          placeholder="Weight"
        />
        <input
          type="number"
          value={userInputs.overheadPress.reps}
          onChange={(e) => handleInputChange('overheadPress', 'reps', e.target.value)}
          placeholder="Reps"
        />
      </div>
      <div>
        <label>Squat:</label>
        <input
          type="number"
          value={userInputs.squat.weight}
          onChange={(e) => handleInputChange('squat', 'weight', e.target.value)}
          placeholder="Weight"
        />
        <input
          type="number"
          value={userInputs.squat.reps}
          onChange={(e) => handleInputChange('squat', 'reps', e.target.value)}
          placeholder="Reps"
        />
      </div>
      <div>
        <label>Bent-over Rows:</label>
        <input
          type="number"
          value={userInputs.bentOverRow.weight}
          onChange={(e) => handleInputChange('bentOverRow', 'weight', e.target.value)}
          placeholder="Weight"
        />
        <input
          type="number"
          value={userInputs.bentOverRow.reps}
          onChange={(e) => handleInputChange('bentOverRow', 'reps', e.target.value)}
          placeholder="Reps"
        />
      </div>
       
       <div ref={pdfElementRef} style={{ display: 'none' }}></div>
      
      
      <button onClick={generatePDF}>Generate PDF</button>

      
    </div>
  );
  };

export default RoutineGenerator;