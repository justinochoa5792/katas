// Difference Of Squares
// Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.

function differenceOfSquares(n) {
  // ...
  let total = [];
  for (let i = 1; i <= n; i++) {
    total.push(i);
  }
  let squareSum = Math.pow(
    total.reduce((a, b) => a + b, 0),
    2
  );
  let sumSquare = total.map((el) => Math.pow(el, 2)).reduce((a, b) => a + b);
  return squareSum - sumSquare;
}
