// Basic Statistics: Mean
// The mean of a group of numbers is calculated by summing all numbers, and dividing this sum by the total count of numbers in the group. Given a sorted array of numbers, return the mean (rounded to one decimal place).

function mean(nums) {
  let total = nums.reduce((a, b) => a + b);
  let mean = parseFloat(total / nums.length).toFixed(1);
  return Number(mean);
}
