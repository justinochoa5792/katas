// Solving Exponential Equations With Logarithms
// Create a function that takes a number a and finds the missing exponent x so that a when raised to the power of x is equal to b.

function solveForExp(a, b) {
  let exp = Math.log2(b) / Math.log2(a);
  return Math.floor(exp);
}
