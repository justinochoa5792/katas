// Halving Sum
// Given a positive integer n, calculate the following sum:
// All elements of the sum are the results of integer division.

function halvingSum(n) {
  return n > 0 ? n + halvingSum(n >> 1) : n;
}
