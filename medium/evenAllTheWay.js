// Even All the Way
// Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.

function getOnlyEvens(nums) {
  return nums.filter((num, i) => num % 2 === 0 && i % 2 === 0);
}
