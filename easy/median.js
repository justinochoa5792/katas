// Basic Statistics: Median
// The median of a group of numbers is the middle number when the group is sorted. If the size of the group is even, the median is the average of the middle two numbers. Given a sorted array of numbers, return the median (rounded to one decimal place if the median isn't an integer).

function median(nums) {
  let mean = Math.floor(nums.length / 2);
  return nums.length % 2 === 0 ? (nums[mean] + nums[mean - 1]) / 2 : nums[mean];
}
