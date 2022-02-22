// Number Split
// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

function numberSplit(n) {
  let first = Math.floor(n / 2);
  let second = Math.ceil(n / 2);
  let arr = [];
  arr.push(first, second);
  return arr;
}
