// Array2Binary addition
// Given an array containing only integers, add all the elements and return the binary equivalent of that sum.
// If the array contains any non-integer element (e.g. an object, a float, a string and so on), return false.

function arr2bin(arr) {
  //GET STARTED
  return arr.some((el) => !Number.isInteger(el))
    ? false
    : arr.reduce((a, b) => a + b, 0).toString(2);
}
