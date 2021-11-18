// Add the Index
// Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

function addIndexes(arr) {
  return arr.map((num, i) => num + i);
}
