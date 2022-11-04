// Double Letters
// Create a function that takes a word and returns true if the word has two consecutive identical letters.

function doubleLetters(word) {
  const regex = new RegExp(/(\w)\1+/g);
  return regex.test(word);
}
