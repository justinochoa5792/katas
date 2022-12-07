// Find the Highest Integer in the Array Using Recursion
// Create a function that finds the highest integer in the array using recursion.

function findHighest(arr) {
  nums = arr.slice();
  if (nums.length == 1) {
    return nums[0];
  }
  if (nums[0] < nums[1]) {
    nums.splice(0, 1);
  } else {
    nums.splice(1, 1);
  }
  return findHighest(nums);
}
