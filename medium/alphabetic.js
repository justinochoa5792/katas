// Alphabetically ordered
// Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.

function alphabetic(s) {
  // Yor code here
  let alphabetic = s.split("").sort().join("");
  return alphabetic == s;
}
