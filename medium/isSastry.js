// Sastry Numbers
// Given a positive integer n, implement a function that returns true if n is a Sastry number, or false if it's not.

function isSastry(number) {
  let num = Number(`${number}${number + 1}`);
  let sastry = Math.sqrt(num);
  return Number.isInteger(sastry);
}
