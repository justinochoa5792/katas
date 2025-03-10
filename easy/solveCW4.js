// Unique string characters
// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.
// Notice also that you return the characters from the first string concatenated with those from the second string.

function solve(a, b) {
  //..
  let filterdA = a.split("").filter((el) => !b.includes(el));
  let filterdB = b.split("").filter((el) => !a.includes(el));
  return filterdA.concat(filterdB).join("");
}
