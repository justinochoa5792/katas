// Recursion: Array Sum
// Write a function that finds the sum of an array. Make your function recursive.

function sum(arr) {
  return arr.length === 0 ? 0 : arr.reduce((a, b) => a + b);
}
