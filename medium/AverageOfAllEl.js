// Is the Average of All Elements a Whole Number?
// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

function isAvgWhole(arr) {
  let number = arr.reduce((a, b) => a + b) / arr.length;
  return Number.isInteger(number);
}
