// Array Multiplier
// Create a function that takes an array as an argument and returns a new nested array for each element in the original array. The nested array must be filled with the corresponding element (string or number) in the original array and each nested array has the same amount of elements as the original array.

function multiply(arr) {
  return arr.map((el) => Array(arr.length).fill(el, 0));
}
