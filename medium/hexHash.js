// Hex Hash Sum
// Complete the function that accepts a valid string and returns an integer.
// Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

function hexHash(code) {
  //magic
  let hexNum = code
    .split("")
    .map((el) => el.charCodeAt().toString(16))
    .join("")
    .match(/[\d]/gi);
  return !hexNum ? 0 : hexNum.reduce((a, b) => Number(a) + Number(b), 0);
}
