// Array of Strings to Array of Numbers
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

function toNumberArray(arr) {
  const Arr = arr.map(Number);
  return Arr;
}
