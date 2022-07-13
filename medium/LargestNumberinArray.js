// Find the Largest Numbers in a Group of Arrays
// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

function findLargestNums(arr) {
  return arr.map((item) => Math.max(...item));
}
