// findAverage
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

var findAverage = function (nums) {
  // Code here
  return nums.reduce((a, b) => a + b) / nums.length;
};
