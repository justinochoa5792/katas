// First and Last Index
// Given a word, write a function that returns the first index and the last index of a character.

function charIndex(word, char) {
  let arr = [];
  arr.push(word.indexOf(char), word.lastIndexOf(char));
  return arr.includes(-1) ? undefined : arr;
}
