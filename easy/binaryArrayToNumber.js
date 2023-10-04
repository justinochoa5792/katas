// Ones and Zeros
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

const binaryArrayToNumber = (arr) => {
  // your code
  const binaryString = arr.join("");
  return parseInt(binaryString, 2);
};
