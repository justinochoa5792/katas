// Is the String in Order?
// Create a function that takes a string and returns true or false, depending on whether the characters are in order or not.

function isInOrder(str) {
  let abcOrder = str.split("").sort().join("");
  return str === abcOrder ? true : false;
}
