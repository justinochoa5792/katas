// Adding Numbers in a String
// Given a string of numbers separated by a comma and space, return the total sum of all the numbers.

function addNums(nums) {
  return nums
    .split(", ")
    .map((item) => Number(item))
    .reduce((a, b) => a + b);
}
