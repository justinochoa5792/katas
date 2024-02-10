// sumDigits
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
  number = Math.abs(number).toString().split("");
  return Number(number.reduce((a, b) => Number(a) + Number(b)));
}
