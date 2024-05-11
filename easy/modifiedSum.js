// Nth power rules them all!
// Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.

function modifiedSum(a, n) {
  // Write your code here
  let power = a.map((el) => Math.pow(el, n)).reduce((a, b) => a + b);
  let original = a.reduce((a, b) => a + b);
  return power - original;
}
