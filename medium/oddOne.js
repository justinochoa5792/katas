// Odder Than the Rest
// Create a method that takes an array/list as an input, and outputs the index at which the sole odd number is located.
// This method should work with arrays with negative numbers. If there are no odd numbers in the array, then the method should output -1.

function oddOne(arr) {
  // Code here
  let idx = arr
    .map((el, i) => (el % 2 !== 0 ? i : ""))
    .filter((el) => el !== "")[0];
  return idx == undefined ? -1 : idx;
}
