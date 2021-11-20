// Summing the Squares
// Create a function that takes a number n and returns the sum of all square numbers up to and including n.

function squaresSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i * i;
  return sum;
}
