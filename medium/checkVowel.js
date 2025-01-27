// Is it a vowel on this position?
// Check if it is a vowel(a, e, i, o, u,) on the n position in a string (the first argument). Don't forget about uppercase.

function checkVowel(string, position) {
  // good luck
  let vowel = string.split("").filter((el, index) => index == position);
  let regex = /[aeiou]/gi;
  return regex.test(vowel);
}
