// Find the Second Largest Number
// Create a function that takes an array of numbers and returns the second largest number.

function secondLargest(arr) {
  let second = arr.sort((a, b) => b - a);
  return second[1];
}
