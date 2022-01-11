// Filter out Strings from an Array
// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

function filterArray(arr) {
  return arr.filter((num) => typeof num === "number");
}
