// 476. Number Complement
// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let chars = { "1": "0", "0": "1" };
  let reversed = num
    .toString(2)
    .split("")
    .map((el) => el.replace(/[01]/g, (m) => chars[m]))
    .join("");
  return parseInt(reversed, 2);
};
