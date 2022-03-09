// Product Divisible by Sum?
// Write a function that returns true if the product of an array is divisible by the sum of that same array. Otherwise, return false.

function divisible(arr) {
  let multi = arr.reduce((prev, curr) => prev * curr);
  let add = arr.reduce((prev, curr) => prev + curr);

  return multi % add === 0 ? true : false;
}
