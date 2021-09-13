// Rotate for Max Number
// Create a function which takes a number and returns the maximum value by rearranging its digits.

function rotateMaxNumber(num) {
  let newNum = Number(num.toString().split("").sort().reverse().join(""));
  return newNum;
}
