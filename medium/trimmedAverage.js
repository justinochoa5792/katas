// Trimmed Averages
// Given an array of numbers, remove the largest and smallest numbers, and calculate the average of the remaining numbers.

function trimmedAverages(arr) {
  arr.sort((a, b) => a - b);
  arr.pop();
  arr.shift();
  return Math.round(arr.reduce((a, b) => a + b) / arr.length);
}
