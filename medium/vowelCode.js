// The Vowel Code
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

function encode(string) {
  let vowels = { "a": "1", "e": "2", "i": "3", "o": "4", "u": "5" };
  return string.replace(/[[aeiou]/g, (el) => vowels[el]);
}

function decode(string) {
  let digits = { "1": "a", "2": "e", "3": "i", "4": "o", "5": "u" };
  return string.replace(/[[12345]/g, (el) => digits[el]);
}
