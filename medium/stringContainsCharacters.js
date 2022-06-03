// Check if a String Contains only Identical Characters
// Write a function that returns true if all characters in a string are identical and false otherwise.

function isIdentical(s) {
  return s.split("").every((char) => char === s[0]);
}
