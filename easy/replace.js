// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

function replace(s) {
  //coding and coding....
  let regex = /[aeiou]/gi;
  return s.replace(regex, "!");
}
