// Find the number of trailing zeros, in its binary representation , of a number.
// Given a number n, find the number of trailing zeros in its binary representation.

function trailingZeros(n) {
  return n.toString(2).split("1").pop().length;
}
