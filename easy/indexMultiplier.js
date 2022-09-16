// Index Multiplier
// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

function indexMultiplier(arr) {
  return arr.length === 0
    ? 0
    : arr.map((item, index) => item * index).reduce((a, b) => a + b);
}
