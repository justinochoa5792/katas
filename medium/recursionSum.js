// Recursion: Sum
// Write a function that finds the sum of the first n natural numbers. Make your function recursive.

function sum(n) {
  let result = 1;
  let count;
  for (count = n; count > 1; count--) {
    result += count;
  }
  return result;
}
