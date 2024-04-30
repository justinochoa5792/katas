// Get decimal part of the given number
// Write a function that returns only the decimal part of the given number.

function getDecimal(n) {
  n = Math.abs(n);
  return n - Math.floor(n);
}
