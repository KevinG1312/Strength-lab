import React from 'react';
import OneRepMaxApp from './OneRepMaxApp';
import Exercise from './ExerciseOneRepMaxCalc';
import OneRepMaxCalc from './GenericOneRepMaxCalculator';
import Header from './Header';


function App() {
  return (
    <div>
     
     <Header />
      <OneRepMaxApp />
      <Exercise name="Bench Press" />
      <Exercise name="Deadlift" />
      <Exercise name="Overhead Press" />
      <Exercise name="Squat" />
      <Exercise name="Bent Over Row" />
      
    </div>
    
  );
}

export default App;
