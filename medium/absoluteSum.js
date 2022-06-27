// Absolute Sum
// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

function getAbsSum(arr) {
  return arr.reduce((a, b) => a + Math.abs(b), 0);
}
