// Recursion: Count Vowels
// Write a function that recursively returns the number of vowels in a string.

function countVowels(str) {
  return str.match(/[aeiou]/gi) === null ? 0 : str.match(/[aeiou]/gi).length;
}
