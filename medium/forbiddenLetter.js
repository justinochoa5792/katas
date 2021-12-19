// The Forbidden Letter
// Given a letter and an array of words, return whether the letter does not appear in any of the words.
function forbiddenLetter(char, arr) {
  return !arr.join("").includes(char);
}
