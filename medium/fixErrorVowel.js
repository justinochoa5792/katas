// Fix the Error: Vowel Edition
// However, it seems that it doesn't work? Fix your friend's code so that it actually does remove all vowels.

// Fix this incorrect code, so that all tests pass!
function removeVowels(str) {
  return str.replace(/[aeiou]/, "");
}

// Corrected
function removeVowels(str) {
  return str.replace(/[aeiou]/g, "");
}
