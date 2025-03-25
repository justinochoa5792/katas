// I'm everywhere!
// Your task is to make a function that takes the value of word and returns it with an "i" at the beginning of the word. For example we get the word "Phone", so we must return "iPhone". But we have a few rules:
// The word should not begin with the letter "I", for example Inspire.
// The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant)
// The first letter should not be lowercase, for example road.

function i(word) {
  //..
  let consonant = !word.match(/[^aeiou]/gi) ? 0 : word.match(/[^aeiou]/gi);
  let vowel = !word.match(/[aeiou]/gi) ? 0 : word.match(/[aeiou]/gi);
  return vowel.length >= consonant.length ||
    word.toLowerCase().startsWith("i") ||
    word.substring(0, 1) !== word.substring(0, 1).toUpperCase() ||
    word == ""
    ? "Invalid word"
    : "i".concat(word);
}
