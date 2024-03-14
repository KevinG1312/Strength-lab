import React, { useEffect, useState } from 'react';
import Exercise from './ExerciseOneRepMaxCalc';
import OneRepMaxCalc from './GenericOneRepMaxCalculator';
import { mensBenchPressTable, mensBentOverRowsTable, mensDeadliftTable, mensPressTable, mensSquatTable, womensBenchPressTable, womensBentOverRowsTable, womensDeadliftTable, womensPressTable, womensSquatTable } from './StrengthTables';


//Finds the closes weight entry from selected table
  const findClosestWeightEntry = (table, weightInKg) => {
    return table.reduce((closest, entry) => {
      const entryWeightDiff = Math.abs(entry['Body Weight'] - weightInKg);
      const closestWeightDiff = Math.abs(closest['Body Weight'] - weightInKg);
      return entryWeightDiff < closestWeightDiff ? entry : closest;
    });
  };

  //takes parameters to choose which specific table the strenght analysis on 
  const getStrengthLevel = (exercise, calculatedOneRepMax, sex, bodyWeight, units) => {
    let strengthTable;

    switch (exercise) {
      case 'Bench Press':
        strengthTable = sex === 'male' ? mensBenchPressTable : womensBenchPressTable;
        break;
      case 'Deadlift':
        strengthTable = sex === 'male' ? mensDeadliftTable : womensDeadliftTable;
        break;
      case 'Overhead Press':
        strengthTable = sex === 'male' ? mensPressTable : womensPressTable;
        break;
      case 'Bent Over Row':
        strengthTable = sex === 'male' ? mensBentOverRowsTable : womensBentOverRowsTable;
        break;
      case 'Squat':
        strengthTable = sex === 'male' ? mensSquatTable : womensSquatTable;
        break;
      default:
        strengthTable = [];
    }
    
    const weightInKg = units === 'pounds' ? bodyWeight * 0.453592 : bodyWeight;
    //converts weight if in pounds to KG 

    
    const closestWeightEntry = findClosestWeightEntry(strengthTable, weightInKg);
    //Find closest weight entry in table to users bodyweight
    
    const strengthLevels = Object.keys(closestWeightEntry).filter((key) => key !== 'Body Weight');
    let closestStrengthLevel = 'Untrained';
    

    
    for (const strengthLevel of strengthLevels) {
      //Go over row in table to find closest weight to users One Rep Max - and gets strength level
      if (calculatedOneRepMax >= closestWeightEntry[strengthLevel]) {
        closestStrengthLevel = strengthLevel;
      } else {
        break;
      }
    }
    return closestStrengthLevel;
  };

  const StrengthAnalysis = ({ userData }) => {
    const exercises = ["Bench Press", "Deadlift", "Overhead Press", "Squat", "Bent Over Row"];
    const [strengthLevels, setStrengthLevels] = useState({});

  

  const handleCalculateStrengthLevel = async (exercise) => {
    
    const calculatedMax = await OneRepMaxCalc(exercise);
    console.log('Exercise:', exercise);
    console.log('Body Weight:', userData.bodyWeight);
    console.log('Sex:', userData.sex);
    console.log('Units:', userData.units);
    console.log('calculatedMax:', calculatedMax);

    if (typeof calculatedMax !== 'number') {
      console.error('OneRepMaxCalc should return a numeric value.');
      return;
    }

    // Calculate strength level using getStrengthLevel function
    const strengthLevel = getStrengthLevel(exercise, calculatedMax, userData.sex, userData.bodyWeight, userData.units);

    // Store the strength level in state
    setStrengthLevels((prevStrengthLevels) => ({
      ...prevStrengthLevels,
      [exercise]: strengthLevel,
    }));
  };

  useEffect(() => {
    // This effect will run whenever userData is updated
    const calculateStrengthLevels = async () => {
      for (const exercise of exercises) {
        await handleCalculateStrengthLevel(exercise);
      }
    };
    calculateStrengthLevels();
  }, [userData]);

  return (
    <>
      {exercises.map((exercise) => (
        <Exercise
          key={exercise}
          name={exercise}
          onCalculate={handleCalculateStrengthLevel}
          userData={userData}
        />
      ))}
    </>
  );
};




export { StrengthAnalysis, getStrengthLevel };


