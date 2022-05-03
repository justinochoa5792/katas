// Binary to Decimal Converter
// You are given one input: an array containing eight 1's and/or 0's. Write a function that takes an 8 bit binary number and converts it to decimal.

function binaryToDecimal(binary) {
  let num = binary.join("");
  return parseInt(num, 2);
}
