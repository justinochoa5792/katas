// 191. Number of 1 Bits
// Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  return n.toString(2).match(/[1]/gi).length;
};
