// 414. Third Maximum Number
// You are given an integer array nums.
// Return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let unique = Array.from(new Set(nums));
  unique.sort((a, b) => b - a);

  return unique.length >= 3 ? unique[2] : unique[0];
};
