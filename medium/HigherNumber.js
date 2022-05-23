// Exists a Number Higher?
// Write a function that returns true if there exists at least one number that is larger than or equal to n.

function existsHigher(arr, n) {
  return Math.max(...arr) >= n ? true : false;
}
