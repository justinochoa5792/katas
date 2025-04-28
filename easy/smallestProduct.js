// Smallest Product
// Given a non-empty array of non-empty integer arrays, multiply the contents of each nested array and return the smallest total.

function smallestProduct(arr) {
  // Code goes here
  return arr.map((el) => el.reduce((a, b) => a * b)).sort((a, b) => a - b)[0];
}
