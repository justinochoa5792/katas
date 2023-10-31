// Sum of Cubes
// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.
// Assume that the input n will always be a positive integer.

function sumCubes(n) {
  // ...
  let total = [];
  for (let i = 1; i <= n; i++) {
    total.push(i);
  }
  return total.map((el) => Math.pow(el, 3)).reduce((a, b) => a + b);
}
