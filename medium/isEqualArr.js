// Are the Sum of Digits in the Numbers Equal?
// Write a function that takes an array of two numbers and determines if the sum of the digits in each number are equal to each other.

function isEqual(arr) {
  let num1 = [...(arr[0] + "")].map(Number).reduce((a, b) => a + b, 0);
  let num2 = [...(arr[1] + "")].map(Number).reduce((a, b) => a + b, 0);
  return num1 === num2;
}
