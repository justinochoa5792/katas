// Unlucky 13
// Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

function unlucky13(nums) {
  return nums.filter((num) => num % 13 !== 0);
}
