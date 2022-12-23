// Sum of the Items in an Array
// Create a function that takes an array and returns the sum of all items in the array.

function sumArray(arr) {
  return arr
    .flat()
    .flat()
    .reduce((a, b) => a + b);
}
