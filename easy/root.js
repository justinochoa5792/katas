// Nth Root of a Number
// Given two numbers x and n, calculate the (positive) nth root of x; this means that being r = result, r^n = x

function root(x, n) {
  // TODO: Return nth root of x
  if (n == "2") {
    return Math.sqrt(x);
  } else if (n == "3") {
    return Math.cbrt(x);
  } else {
    return Math.pow(x, 1 / n);
  }
}
