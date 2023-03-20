// Find the Largest Even Number
// Write a function that finds the largest number in an array nums that is also even. If there is no even number, return -1.

function largestEven(nums) {
  let even = nums.filter((el) => el % 2 === 0);
  return even.length === 0 ? -1 : Math.max(...even);
}
