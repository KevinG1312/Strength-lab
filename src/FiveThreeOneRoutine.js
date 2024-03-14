import React from 'react';
const FiveThreeOneRoutine = ({ userMaxes, selectedUnit }) => {
  // Render HTML structure for five-three-one routine based on user maxes
  Object.entries(userMaxes).forEach(([exercise, max]) => {
    if (isNaN(max)) {
      console.error(`Invalid max for ${exercise}: ${max}`);
    }
  });
  return (
  <div>
  <h2>Week 1 Day 1: Overhead Press</h2>
  <table style={{borderCollapse: 'collapse', width: '100%'}}>
    <thead>
      <tr>
        <th style={{ border: '1px solid black', padding: '8px' }}>Exercise</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Sets x Reps</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Weight</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.4 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.5 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.6 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.65 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.75 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5+</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.85 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Dips</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x15</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bodyweight/weighted</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Chin-ups</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x10</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bodyweight/weighted</td>
      </tr> 
    </tbody>
  </table >
  <h2>Week 1 day 2: Deadlift</h2>
  <table style={{borderCollapse: 'collapse', width: '100%'}}>
    <thead>
      <tr>
        <th style={{ border: '1px solid black', padding: '8px' }}>Exercise</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Sets x Reps</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Weight</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.4 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.5 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.6 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.65 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.75 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5+</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.85 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Good Mornings</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x15</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bodyweight/weighted</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Hanging Leg Raises</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x10</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bodyweight/weighted</td>
      </tr> 
    </tbody>
  </table >
  <h2>Week 1 Day 3 Bench Press:</h2>
  <table style={{borderCollapse: 'collapse', width: '100%'}}>
    <thead>
      <tr>
        <th style={{ border: '1px solid black', padding: '8px' }}>Exercise</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Sets x Reps</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Weight</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.4 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.5 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.6 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.65 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.75 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5+</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.85 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Dumbell Bench</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x15</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>weighted</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Dumbell Row</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x10</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>weighted</td>
      </tr> 
    </tbody>
  </table >
  <h2>Week 1 Day 4: Squat</h2>
  <table style={{borderCollapse: 'collapse', width: '100%'}}>
    <thead>
      <tr>
        <th style={{ border: '1px solid black', padding: '8px' }}>Exercise</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Sets x Reps</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Weight</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.4 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.5 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.6 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.65 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.75 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5+</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.85 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Leg Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x15</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>weighted</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Leg Curl</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x15</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>weighted</td>
      </tr> 
    </tbody>
  </table >
  <h2>Week 2 Day 1: OHP</h2>
  <table style={{borderCollapse: 'collapse', width: '100%'}}>
    <thead>
      <tr>
        <th style={{ border: '1px solid black', padding: '8px' }}>Exercise</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Sets x Reps</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Weight</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.4 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.5 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.6 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.70 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.80 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3+</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.9 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Dips</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x15</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bodyweight/weighted</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Chin-ups</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x10</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bodyweight/weighted</td>
      </tr> 
    </tbody>
  </table >
  <h2>Week 2 day 2: Deadlift</h2>
  <table style={{borderCollapse: 'collapse', width: '100%'}}>
    <thead>
      <tr>
        <th style={{ border: '1px solid black', padding: '8px' }}>Exercise</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Sets x Reps</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Weight</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.4 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.5 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.6 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.7 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.8 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3+</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.9 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Good Mornings</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x15</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bodyweight/weighted</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Hanging Leg Raises</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x10</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bodyweight/weighted</td>
      </tr> 
    </tbody>
  </table >
  <h2>Week 2 Day 3: Bench Press</h2>
  <table style={{borderCollapse: 'collapse', width: '100%'}}>
    <thead>
      <tr>
        <th style={{ border: '1px solid black', padding: '8px' }}>Exercise</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Sets x Reps</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Weight</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.4 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.5 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.6 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.70 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.8 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3+</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.9 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Dumbell Bench</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x15</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>weighted</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Dumbell Row</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x10</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>weighted</td>
      </tr> 
    </tbody>
  </table >
  <h2>Week 2 Day 4: Squat</h2>
  <table style={{borderCollapse: 'collapse', width: '100%'}}>
    <thead>
      <tr>
        <th style={{ border: '1px solid black', padding: '8px' }}>Exercise</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Sets x Reps</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Weight</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.4 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.5 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.6 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.7 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.8 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3+</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.9 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Leg Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x15</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>weighted</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Leg Curl</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x15</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>weighted</td>
      </tr> 
    </tbody>
  </table >
  <h2>Week 3 Day 1: OHP</h2>
  <table style={{borderCollapse: 'collapse', width: '100%'}}>
    <thead>
      <tr>
        <th style={{ border: '1px solid black', padding: '8px' }}>Exercise</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Sets x Reps</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Weight</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.4 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.5 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.6 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.75 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.85 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x1+</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.95 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Dips</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x15</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bodyweight/weighted</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Chin-ups</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x10</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bodyweight/weighted</td>
      </tr> 
    </tbody>
  </table >
  <h2>Week 3 day 2: Deadlift</h2>
  <table style={{borderCollapse: 'collapse', width: '100%'}}>
    <thead>
      <tr>
        <th style={{ border: '1px solid black', padding: '8px' }}>Exercise</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Sets x Reps</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Weight</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.4 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.5 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.6 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.75 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.85 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x1+</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.95 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Good Mornings</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x15</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bodyweight/weighted</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Hanging Leg Raises</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x10</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bodyweight/weighted</td>
      </tr> 
    </tbody>
  </table >
  <h2>Week 3 Day 3: Bench Press</h2>
  <table style={{borderCollapse: 'collapse', width: '100%'}}>
    <thead>
      <tr>
        <th style={{ border: '1px solid black', padding: '8px' }}>Exercise</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Sets x Reps</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Weight</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.4 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.5 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.6 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.75 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.85 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x1+</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.95 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Dumbell Bench</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x15</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>weighted</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Dumbell Row</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x10</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>weighted</td>
      </tr> 
    </tbody>
  </table >
  <h2>Week 3 Day 4: Squat</h2>
  <table style={{borderCollapse: 'collapse', width: '100%'}}>
    <thead>
      <tr>
        <th style={{ border: '1px solid black', padding: '8px' }}>Exercise</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Sets x Reps</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Weight</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.4 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.5 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.6 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.75 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.85 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x1+</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.95 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Leg Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x15</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>weighted</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Leg Curl</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x15</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>weighted</td>
      </tr> 
    </tbody>
  </table >
  <h2>Deload Week Day 1: OHP</h2>
  <table style={{borderCollapse: 'collapse', width: '100%'}}>
    <thead>
      <tr>
        <th style={{ border: '1px solid black', padding: '8px' }}>Exercise</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Sets x Reps</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Weight</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.4 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.5 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.6 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Dips</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x15</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bodyweight/weighted</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Chin-ups</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x10</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bodyweight/weighted</td>
      </tr> 
    </tbody>
  </table >
  <h2>Deload Week day 2: Deadlift</h2>
  <table style={{borderCollapse: 'collapse', width: '100%'}}>
    <thead>
      <tr>
        <th style={{ border: '1px solid black', padding: '8px' }}>Exercise</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Sets x Reps</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Weight</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.4 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.5 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.6 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Good Mornings</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x15</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bodyweight/weighted</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Hanging Leg Raises</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x10</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bodyweight/weighted</td>
      </tr> 
    </tbody>
    </table>
    <h2>Deload Week Day 3: Bench Press</h2>
  <table style={{borderCollapse: 'collapse', width: '100%'}}>
    <thead>
      <tr>
        <th style={{ border: '1px solid black', padding: '8px' }}>Exercise</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Sets x Reps</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Weight</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.4 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.5 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.6 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Dumbell Bench</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x15</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>weighted</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Dumbell Row</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x10</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>weighted</td>
      </tr> 
    </tbody>
  </table >
  <h2>Deload Week Day 4: Squat</h2>
  <table style={{borderCollapse: 'collapse', width: '100%'}}>
    <thead>
      <tr>
        <th style={{ border: '1px solid black', padding: '8px' }}>Exercise</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Sets x Reps</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Weight</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.4 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.5 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.6 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Leg Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x15</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>weighted</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Leg Curl</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x15</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>weighted</td>
      </tr> 
    </tbody>
  </table >
  

  
</div>
  );
  
};

export default FiveThreeOneRoutine;