// Return the First and Last Elements in an Array
// Create a function that takes an array of values and returns the first and last values in a new array.

function firstLast(arr) {
  let last = arr.pop();
  let first = arr.shift();
  return [first, last];
}
