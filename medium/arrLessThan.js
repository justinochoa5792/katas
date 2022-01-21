// Less Than 100 Array Remix
// Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.

function arrayLessThan100(arr) {
  let total = arr.reduce((curr, prev) => curr + prev);
  return total >= 100 ? false : true;
}
