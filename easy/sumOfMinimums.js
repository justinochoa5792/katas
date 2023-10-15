// Sum of Minimums!
// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

function sumOfMinimums(arr) {
  // your code here
  return arr.map((el) => Math.min(...el)).reduce((a, b) => a + b);
}
