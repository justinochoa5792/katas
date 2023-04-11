// Narcissistic Numbers
// A number is narcissistic when the sum of its digits, with each digit raised to the power of digits quantity, is equal to the number itself.
// Given a positive integer n, implement a function that returns true if the number is narcissistic, and false if it's not.

function isNarcissistic(n) {
  let power = n.toString().length;
  let num = n
    .toString()
    .split("")
    .map((el) => Math.pow(Number(el), power))
    .reduce((a, b) => a + b);
  return n === num ? true : false;
}
