// The mean of two means
// Write a function that takes as parameters an array (arr) and 2 integers (x and y). The function should return the mean between the mean of the the first x elements of the array and the mean of the last y elements of the array.
// The mean should be computed if both x and y have values higher than 1 but less or equal to the array's length. Otherwise the function should return -1.

function getMean(arr, x, y) {
  let first = arr.slice(0, x).reduce((a, b) => a + b) / arr.slice(0, x).length;
  let second = arr.slice(-y).reduce((a, b) => a + b) / arr.slice(-y).length;
  return x <= 1 || y <= 1 || x > arr.length || y > arr.length
    ? -1
    : (first + second) / 2;
}
