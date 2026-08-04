// 3731. Find Missing Elements
// You are given an integer array nums consisting of unique integers.
// Originally, nums contained every integer within a certain range. However, some integers might have gone missing from the array.
// The smallest and largest integers of the original range are still present in nums.
// Return a sorted list of all the missing integers in this range. If no integers are missing, return an empty list.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
  let total = [];
  let sorted = nums.sort((a, b) => a - b);
  for (let i = sorted[0]; i <= sorted[sorted.length - 1]; i++) {
    total.push(i);
  }
  return total.filter((el) => !sorted.includes(el));
};
