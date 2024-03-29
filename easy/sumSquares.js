// Be Concise III - Sum Squares
// You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. For example:

function sumSquares(array) {
  return array.map((el) => Math.pow(el, 2)).reduce((a, b) => a + b);
}
