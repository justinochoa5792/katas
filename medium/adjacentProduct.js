// Max Adjacent Product
// Given an array of integers, find the pair of adjacent elements that have the largest product and return that product.

function adjacentProduct(arr) {
  let maxProduct = arr[0] * arr[1];
  for (let i = 1; i < arr.length; i++) {
    product = arr[i] * arr[i + 1];
    if (product > maxProduct) maxProduct = product;
  }
  return maxProduct;
}
