// [JS] Parse integers in array
// A colleague asked if you can help him fix his function. It seems it doesn't always parse Integers correctly.

/**
 * Function converts array of string to array of integers.
 * @param  {Array} of numbers in form of string
 * @return {Array} of integer numbers
 */
var parseNumbers = function (intStrs) {
  return intStrs.map((el) => parseInt(el));
};
