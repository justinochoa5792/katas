// Testing K^K == N?
// Write a function that returns true if k^k == n for input (n, k) and return false otherwise.

function kToK(n, k) {
  return Math.pow(k, k) === n ? true : false;
}
