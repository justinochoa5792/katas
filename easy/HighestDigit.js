// Highest Digit
// Create a function that takes a number as an argument and returns the highest digit in that number.

function highestDigit(number) {
  let newNum = number.toString().split("");
  let total = newNum.map(Number);
  return Math.max(...total);
}
