// Changing letters
// When provided with a String, capitalize all vowels

function swap(string) {
  let replace = { "e": "E", "o": "O", "a": "A", "u": "U", "i": "I" };
  return string.replace(/[aeiou]/g, (m) => replace[m]);
}
