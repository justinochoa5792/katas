// All Occurrences of an Element in an Array
// Create a function that returns the indices of all occurrences of an item in the array.

function getIndices(arr, el) {
  return arr.map((x, i) => (x === el ? i : "")).filter((index) => index !== "");
}
