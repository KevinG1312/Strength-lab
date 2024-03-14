import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import HowtoAbout from './HowToAbout';
import OneRepMaxApp from './OneRepMaxApp';
import RoutineGenerator from './RoutineGenerator';
import { StrengthAnalysis } from './StrengthAnalysis';
import UserInputForm from './userInputForm';

const Header = () => {
  const [userData, setUserData] = useState({
    bodyWeight: '',
    sex: 'male',
    units: 'kilograms',
  });

  const handleUserInput = (data) => {
    setUserData(data);
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
          <h3>Please enter weight and reps of your best set to estimate your one rep max</h3>
          {<OneRepMaxApp />}
        </Tab>
        <Tab eventKey="strengthAnalysis" title="Strength Analysis">
          <>
          <h3>Please select sex, units, and enter your bodyweight </h3>
          <h3>Then enter your best weight and reps for each exercise</h3>
            <UserInputForm onUserInput={handleUserInput} />
            <StrengthAnalysis userData={userData} />
          </>
        </Tab>
        <Tab eventKey="routineGenerator" title="Routine Generator">
          <h3>Please enter your best weight and reps lifted</h3>
          <h3>and select a routine and units</h3>
          <h3>             Weight x Reps</h3>
          <RoutineGenerator />
        </Tab>
        <Tab eventKey="howToAbout" title="How To/About">
        <HowtoAbout />
          </Tab>
        
      </Tabs>
    </div>
  );
};

export default Header;
