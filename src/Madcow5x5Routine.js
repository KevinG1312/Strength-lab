import React from 'react';

const MadCow5x5Routine = ({ userMaxes, selectedUnit }) => {
  // Render HTML structure for Texas Method routine based on user maxes
  Object.entries(userMaxes).forEach(([exercise, max]) => {
    if (isNaN(max)) {
      console.error(`Invalid max for ${exercise}: ${max}`);
    }
  });
  return (
  <div>
  <h2>Day 1</h2>
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
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.45 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.54 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.63 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.765 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.855 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.45 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.54 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.63 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.765 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.855 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bent-Over Row</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.45 * userMaxes.bentOverRow).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bent-Over Row</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.54 * userMaxes.bentOverRow).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bent-Over Row</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.63 * userMaxes.bentOverRow).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bent-Over Row</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.765 * userMaxes.bentOverRow).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bent-Over Row</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.855 * userMaxes.bentOverRow).toString()} {selectedUnit}</td>
      </tr>
    </tbody>
  </table >

  <h2> Day 2</h2>
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
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.45 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.54 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.63 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.63 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.54 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.63 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.765 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Overhead Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.855 * userMaxes.overheadPress).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }} >1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.54 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }} >1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.63 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }} >1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.765 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Deadlift</td>
        <td style={{ border: '1px solid black', padding: '8px' }} >1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.855 * userMaxes.deadlift).toString()} {selectedUnit}</td>
      </tr>
    </tbody>
  </table>
  <h2>Day 3</h2>
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
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.45 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.54 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.63 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.765 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.88 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Squat</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x8</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.63 * userMaxes.squat).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.45 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.54 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.63 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.765 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.88 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bench Press</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x8</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.63 * userMaxes.bench).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bent-Over Row</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.45 * userMaxes.bentOverRow).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bent-Over Row</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.54 * userMaxes.bentOverRow).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bent-Over Row</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.63 * userMaxes.bentOverRow).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bent-Over Row</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x5</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.765 * userMaxes.bentOverRow).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bent-Over Row</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x3</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.88 * userMaxes.bentOverRow).toString()} {selectedUnit}</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid black', padding: '8px' }}>Bent-Over Row</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>1x8</td>
        <td style={{ border: '1px solid black', padding: '8px' }}>{Math.round(0.63 * userMaxes.bentOverRow).toString()} {selectedUnit}</td>
      </tr>
    </tbody>
  </table >
</div>
  );
  
};

export default MadCow5x5Routine;