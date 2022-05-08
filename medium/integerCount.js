// Integer Digits Count
// Create a function that counts the integer's number of digits.

function count(n) {
  let num = Math.abs(n);
  return num.toString().length;
}
