// Summing a Slice
// Given an array and an integer n, return the sum of the first n numbers in the array.

function sliceSum(arr, n) {
  return arr.slice(0, n).length === 0 ||
    arr.slice(0, n).reduce((a, b) => a + b) === 0
    ? 0
    : arr.slice(0, n).reduce((a, b) => a + b);
}
