// ReverseAndNot
// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.

function reverseAndNot(i) {
  let j = i.toString().split("").reverse();
  i = i.toString().split("");
  return Number(j.concat(i).join(""));
}
