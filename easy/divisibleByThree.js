// By 3, or not by 3? That is the question . . .
// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

function divisibleByThree(str) {
  return str.split("").reduce((a, b) => Number(a) + Number(b)) % 3 === 0
    ? true
    : false;
}
