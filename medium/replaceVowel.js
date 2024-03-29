// Replace Vowel with Another Character
// Create a function that takes a string and replaces the vowels with another character.
// a = 1
// e = 2
// i = 3
// o = 4
// u = 5

function replaceVowel(word) {
  const chars = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  return word.replace(/[aeiou]/gi, (m) => chars[m]);
}
