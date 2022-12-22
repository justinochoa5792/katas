// Even Index Elements in Array
// Create a function that takes an array of integers and returns the sum of all the integers that have an even index, multiplied by the integer at the last index.

function evenLast(arr) {
  let filtered = arr.filter((el, i) => i % 2 === 0);
  return arr.length === 0
    ? 0
    : filtered.reduce((a, b) => a + b) * arr[arr.length - 1];
}
