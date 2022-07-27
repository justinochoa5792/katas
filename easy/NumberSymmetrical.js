// Is the Number Symmetrical?
//  Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

function isSymmetrical(num) {
  let reverse = Number(num.toString().split("").reverse().join(""));
  return num === reverse ? true : false;
}
