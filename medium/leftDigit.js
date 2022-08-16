// Most Left Digit
// Write a function that takes a string as an argument and returns the left most digit in the string.

function leftDigit(num) {
  return Number(num.match(/\d/g)[0]);
}
