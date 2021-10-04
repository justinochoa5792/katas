// Fix the Broken Code
// A student learning JavaScript was trying to make a function that sorts all the letters of a word, but their code is broken, and they can't figure out why.
// Spot and fix the error(s) in the code to make the function work.

// original
function sortWord(word) {
  return word.sorts().to_s;
}
// fixed
function sortWord(word) {
  return word.split("").sort().join("");
}
