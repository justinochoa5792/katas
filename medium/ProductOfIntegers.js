// Product of All Odd Integers
// Create a function that returns the product of all odd integers in an array.

function oddProduct(arr) {
  let oddArr = arr.filter((a) => a % 2 === 1);
  return oddArr.reduce((a, b) => a * b);
}
