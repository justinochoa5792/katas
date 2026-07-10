//  Reverse Integer
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reversed =
    x < 0
      ? -Number(Math.abs(x).toString().split("").reverse().join(""))
      : Number(x.toString().split("").reverse().join(""));

  if (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) {
    return 0;
  }

  return reversed;
};
