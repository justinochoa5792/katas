// Calculate the Mean
// Create a function that takes an array of numbers and returns the mean (average) of all those numbers.

function mean(arr) {
  let total = arr.reduce((a, b) => a + b) / arr.length;
  return Number(total.toFixed(2));
}
