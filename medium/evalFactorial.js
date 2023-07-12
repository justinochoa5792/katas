// Evaluating Factorials
// Create a function that takes an array of factorial expressions and returns their sum.

function evalFactorial(arr) {
  let num = arr.map((el) => parseInt(el));
  function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
  }
  return num.map((x) => factorial(x)).reduce((prev, curr) => prev + curr);
}
