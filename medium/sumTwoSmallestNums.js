// Return the Sum of the Two Smallest Numbers
// Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.

function sumTwoSmallestNums(arr) {
  let sorted = arr.sort((a, b) => a - b).filter((item) => item > 0);
  return sorted[0] + sorted[1];
}
