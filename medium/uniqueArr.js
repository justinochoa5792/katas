// Find Unique Positive Numbers from Array
// Write a function that takes an array and returns a new array with unique positive (more than 0) numbers.

function uniqueArr(arr) {
  let newArr = [...new Set(arr)];
  return newArr.filter((i) => i > 0);
}
