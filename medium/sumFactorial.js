// Sum Factorial
// In this kata you will be given a list of values that you must first find the factorial, and then return their sum.

const fact = (n) => (n ? n * fact(n - 1) : 1);

function sumFactorial(arr) {
  return arr.map(fact).reduce((a, b) => a + b);
}
