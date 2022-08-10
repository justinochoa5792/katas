// Numbers to Arrays and Vice Versa
// Write two functions:
// toArray(), which converts a number to an array of its digits.
// toNumber(), which converts an array of digits back to its number.

function toArray(num) {
  return num
    .toString()
    .split("")
    .map((a) => Number(a));
}

function toNumber(arr) {
  return Number(arr.join(""));
}
