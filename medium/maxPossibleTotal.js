// Maximum Possible Total
// Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

function maxTotal(nums) {
  return nums
    .sort((a, b) => a - b)
    .slice(nums.length - 5)
    .reduce((a, b) => a + b);
}
