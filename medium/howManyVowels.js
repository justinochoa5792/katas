// How Many Vowels?
// Create a function that takes a string and returns the number (count) of vowels contained within it.

function countVowels(str) {
  return str.match(/[aeiou]/g).length;
}
