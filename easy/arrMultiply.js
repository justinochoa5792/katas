// Multiply the strings in the array
// You received an array with two strings.
// Create a function that will return their product as a string.

function arrMultiply(arr) {
  //your solution
  return arr.reduce((a, b) => Number(a) * Number(b)).toString();
}
