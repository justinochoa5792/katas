// Find NaN in an Array
// Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.

function findNaN(number) {
  return number
    .map((item) => item.toString())
    .findIndex((item) => item === "NaN");
}
