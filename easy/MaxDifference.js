// Maximum Difference
// Given an array of integers, return the difference between the largest and smallest integers in the array.

function difference(nums) {
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  return max - min;
}
