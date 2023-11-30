import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import OneRepMaxApp from './OneRepMaxApp';
import Exercise from './ExerciseOneRepMaxCalc';

const Header = () => {
  const headerStyle = {
    width: '100%',
    height: '25vh', // Adjust the height as needed
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
          src="./header-image.jpg" // Use the path relative to the public folder
          alt="Header"
          style={imageStyle}
        />
      </div>
      <Tabs defaultActiveKey="oneRepMax" id="header-tabs">
        <Tab eventKey="oneRepMax" title="One Rep Max Calculator">
          {<OneRepMaxApp />}
        </Tab>
        <Tab eventKey="strengthAnalysis" title="Strength Analysis">
          {<><Exercise name="Bench Press" /><Exercise name="Deadlift" /><Exercise name="Overhead Press" /><Exercise name="Squat" /><Exercise name="Bent Over Row" /></>}
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
