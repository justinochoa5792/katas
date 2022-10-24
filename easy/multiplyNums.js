// Multiplying Numbers in a String
// Given a string of numbers separated by a comma and space, return the product of the numbers.

function multiplyNums(nums) {
  let num = nums.split(",").map((item) => Number(item));
  return num.reduce((a, b) => a * b, 1);
}
