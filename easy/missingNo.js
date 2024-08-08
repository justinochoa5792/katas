// Find the Missing Number
// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

function missingNo(nums) {
  let missing = [];

  for (var i = 0; i <= nums.length; i++) {
    if (nums.indexOf(i) == -1) {
      missing.push(i);
    }
  }
  return missing[0];
}
