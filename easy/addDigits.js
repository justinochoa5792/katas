// addDigits
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (num.toString().length > 1) {
    num = num
      .toString()
      .split("")
      .reduce((a, b) => Number(a) + Number(b));
  }
  return num;
};
