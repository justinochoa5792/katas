// 268. Missing Number
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let result = [];

  for (let i = 0; i <= nums.length; i++) {
    result.push(i);
  }

  return result.filter((el) => !nums.includes(el))[0];
};
