// Twice as old
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  let difference = sonYearsOld * 2;
  return Math.abs(dadYearsOld - difference);
}
