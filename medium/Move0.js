// Move Zeroes
// Create a function that takes an array arr of numbers and moves all zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
  return arr.sort((a, b) => (a === 0) - (b === 0));
}
