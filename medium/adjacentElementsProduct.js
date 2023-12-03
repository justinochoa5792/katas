// Maximum Product
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
  // max product
  let prod = [];
  for (let i = 0; i < array.length - 1; i++) {
    prod.push(array[i] * array[i + 1]);
  }
  return prod.sort((a, b) => b - a)[0];
}
