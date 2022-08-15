// Sum of Number Elements in an Array
// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

function numbersSum(arr) {
  let newArr = arr.filter(Number.isInteger);
  return newArr.length === 0 ? 0 : newArr.reduce((a, b) => a + b);
}
