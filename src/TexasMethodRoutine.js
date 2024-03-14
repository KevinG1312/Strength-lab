import React from 'react';




const TexasMethodRoutine = ({ userMaxes, selectedUnit }) => {
  // Render HTML structure for Texas Method routine based on user maxes
  Object.entries(userMaxes).forEach(([exercise, max]) => {
    if (isNaN(max)) {
      console.error(`Invalid max for ${exercise}: ${max}`);
    }
  });
  return (
  <div>
  <h2>Week A Day 1</h2>
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
        <td style={{ border: '1px solid black', padding: '8px' }}>5x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.81 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>3x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.81 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.81 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
    </tbody>
  </table >
  <h2>Week A Day 2</h2>
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
        <td style={{ border: '1px solid black', padding: '8px' }}>2x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.63 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>3x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.63 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Chin-ups</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>3 x Max Reps</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bodyweight/weighted</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Glute Ham Raise</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5 x 10</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bodyweight</td>
      </tr>
    </tbody>
  </table >
  <h2>Week A Day 3</h2>
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
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5+</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.9 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5+</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.9 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }} >1x5+</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.9 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
    </tbody>
  </table>
  <h2>Week B Day 1</h2>
  <table style={{borderCollapse: 'collapse', width: '100%'}}>
    <thead>
      <tr>
        <th style={{ border: '1px solid black', padding: '8px' }}>Exercise</th>
        <th style={{ border: '1px solid black', padding: '8px' }} >Sets x Reps</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Weight</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.81 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>3x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.81 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.81 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
    </tbody>
  </table >
  <h2>Week B Day 2</h2>
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
        <td style={{ border: '1px solid black', padding: '8px' }}>2x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.63 *userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>3x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.63 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Chin-ups</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>3 x Max Reps</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bodyweight/weighted</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Glute Ham Raise</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>5 x 10</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bodyweight</td>
      </tr>
    </tbody>
  </table>
  <h2>Week B Day 3</h2>
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
        <td style={{ border: '1px solid black', padding: '8px' }}>5x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.9 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>3x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.9 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.9 * userMaxes.deadlift ).toString()} {selectedUnit}</td>
      </tr>
    </tbody>
  </table>
</div>
  );
  
};

export default TexasMethodRoutine;