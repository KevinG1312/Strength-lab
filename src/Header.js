import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import OneRepMaxApp from './OneRepMaxApp';
import Exercise from './ExerciseOneRepMaxCalc';
import UserInputForm from './userInputForm';
import { getStrengthLevel } from './StrengthAnalysis';
import OneRepMaxCalc from './GenericOneRepMaxCalculator';

const Header = () => {
  const [userData, setUserData] = useState({
    bodyWeight: '',
    sex: 'male',
    units: 'kilograms',
  });

  const handleUserInput = (data) => {
    setUserData(data);
  };

  useEffect(() => {
    // This effect will run whenever userData is updated
    const calculateStrengthLevels = async () => {
      for (const exercise of exercises) {
        const calculatedMax = await OneRepMaxCalc(exercise); // Use your appropriate function to get the calculated max
        handleCalculateStrengthLevel(exercise, calculatedMax);
      }
    };
    calculateStrengthLevels();
  }, [userData]);

  const exercises = ["Bench Press", "Deadlift", "Overhead Press", "Squat", "Bent Over Row"];
  const [strengthLevels, setStrengthLevels] = useState({});

  const handleCalculateStrengthLevel = (exercise, calculatedMax) => {
    console.log('Exercise:', exercise);
    console.log('Body Weight:', userData.bodyWeight);
    console.log('Sex:', userData.sex);
    console.log('Units:', userData.units);
    console.log('calculatedMax:', calculatedMax);
    // Calculate strength level using getStrengthLevel function
    const strengthLevel = getStrengthLevel(exercise, userData.bodyWeight, userData.sex, userData.units);

    // Store the strength level in state
    setStrengthLevels((prevStrengthLevels) => ({
      ...prevStrengthLevels,
      [exercise]: strengthLevel,
    }));
  };

  const headerStyle = {
    width: '100%',
    height: '25vh',
    overflow: 'hidden',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <div>
      <div style={headerStyle}>
        <img
          src="./header-image.jpg"
          alt="Header"
          style={imageStyle}
        />
      </div>
      <Tabs defaultActiveKey="oneRepMax" id="header-tabs">
        <Tab eventKey="oneRepMax" title="One Rep Max Calculator">
          {<OneRepMaxApp />}
        </Tab>
        <Tab eventKey="strengthAnalysis" title="Strength Analysis">
          <>
            <UserInputForm onUserInput={handleUserInput} />
            {exercises.map((exercise) => (
              <Exercise
                key={exercise}
                name={exercise}
                onCalculate={(exercise, calculatedMax) => handleCalculateStrengthLevel(exercise, calculatedMax)}
                userData={userData} // Make sure to pass userData to Exercise
              />
            ))}
            {Object.entries(strengthLevels).map(([exercise, strengthLevel]) => (
              <div key={exercise}>
                <p>{`${exercise} Strength Level: ${typeof strengthLevel === 'number' ? strengthLevel : 'Not available'}`}</p>
              </div>
            ))}
          </>
        </Tab>
        <Tab eventKey="routineGenerator" title="Routine Generator">
          {/* Content for Routine Generator tab */}
        </Tab>
        <Tab eventKey="howToAbout" title="How To/About">
          {/* Content for How To/About tab */}
        </Tab>
      </Tabs>
    </div>
  );
};

export default Header;