import {mensBenchPressTable,
    womensBenchPressTable,
    womensBentOverRowsTable,
    womensDeadliftTable,
    mensDeadliftTable,
    mensPressTable,
    womensPressTable,
    womensSquatTable,
    mensSquatTable, 
    mensBentOverRowsTable} from './StrengthTables'; 

    const findClosestWeightEntry = (table, weightInKg) => {
  return table.reduce((closest, entry) => {
    const entryWeightDiff = Math.abs(entry['Body Weight'] - weightInKg);
    const closestWeightDiff = Math.abs(closest['Body Weight'] - weightInKg);
    return entryWeightDiff < closestWeightDiff ? entry : closest;
  });
};

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

  const closestWeightEntry = findClosestWeightEntry(strengthTable, weightInKg);

  const strengthLevels = Object.keys(closestWeightEntry).filter((key) => key !== 'Body Weight');
let closestStrengthLevel = 'Untrained';

for (const strengthLevel of strengthLevels) {
  if (calculatedOneRepMax >= closestWeightEntry[strengthLevel]) {
    closestStrengthLevel = strengthLevel;
  } else {
    break;
  }
}
  return closestStrengthLevel;
};

export { getStrengthLevel };