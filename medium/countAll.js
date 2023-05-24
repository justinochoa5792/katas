// Count the Letters and Digits
// Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.

function countAll(str) {
  let letters = str.match(/[a-z]/gi) === null ? 0 : str.match(/[a-z]/gi).length;
  let numbers = str.match(/[0-9]/g) === null ? 0 : str.match(/[0-9]/g).length;
  return { "LETTERS": letters, "DIGITS": numbers };
}
