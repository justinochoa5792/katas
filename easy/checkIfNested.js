// Check if One Array can be Nested in Another
// Create a function that returns true if the first array can be nested inside the second.

function canNest(arr1, arr2) {
  return Math.min(...arr1) > Math.min(...arr2) &&
    Math.max(...arr1) < Math.max(...arr2)
    ? true
    : false;
}
