// Binary Array to Decimal
// In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of ones and zeroes of a binary number, return the equivalent decimal value.

function binaryToDecimal(arr) {
  let binary = arr.join("");
  return parseInt(binary, 2);
}
