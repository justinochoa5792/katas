// Odd Up, Even Down — N Times
// Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:
// Adds two (+2) to each odd integer.
// Subtracts two (-2) from each even integer.

function evenOddTransform(arr, n) {
  let num = n * 2;
  return arr.map((item) => (item % 2 === 0 ? item - num : item + num));
}
