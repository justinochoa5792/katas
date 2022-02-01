// Extremely Over-Nested
// Create a function that returns the original value from a matrix with too many sub-arrays.

function deNest(arr) {
  let target = arr.flat(Infinity);
  return target.pop([]);
}
