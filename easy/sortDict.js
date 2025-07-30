// Sorting Dictionaries
// Create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).
// The list must be sorted by the value and be sorted largest to smallest.

function sortDict(dict) {
  // ...
  return Object.entries(dict)
    .map(([key, value]) => [isNaN(key) ? key : Number(key), value])
    .sort((a, b) => b[1] - a[1]);
}
