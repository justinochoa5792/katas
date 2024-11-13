// Ordering the words!
// Given a string, you need to write a method that order every letter in this string in ascending order.

function orderWord(s) {
  //your code here
  if (s == null || s.length === 0) {
    return "Invalid String!";
  }

  let split = s.split("");
  return split.sort().join("");
}
