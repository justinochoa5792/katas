//Sum of Digits / Digital Root
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digitalRoot(n) {
  // ...
  let sum = n;
  let arr = [];

  while (sum > 9) {
    arr = sum.toString().split("");
    sum = arr.reduce((a, b) => parseInt(a) + parseInt(b));
  }
  return sum;
}
