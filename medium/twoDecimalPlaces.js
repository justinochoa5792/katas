// Formatting decimal places #1
// Each floating-point number should be formatted that only the first two decimal places are returned. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

function twoDecimalPlaces(number) {
  // Your code here
  return Math.trunc(number * 100) / 100;
}
