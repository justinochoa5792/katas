// 1295. Find Numbers with Even Number of Digits
// Given an array nums of integers, return how many of them contain an even number of digits.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  return nums.filter((el) => el.toString().length % 2 == 0).length;
};
