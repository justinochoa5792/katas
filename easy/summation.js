// Grasshopper - Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
  // Code here
  let total = [];
  for (let i = 1; i <= num; i++) {
    total.push(i);
  }
  return total.reduce((a, b) => a + b, 0);
};
