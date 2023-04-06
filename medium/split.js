// Split a String Based on Vowels and Consonants
// Write a function that takes a string, breaks it up and returns it with vowels first, consonants second. For any character that's not a vowel (like special characters or spaces), treat them like consonants.

function split(str) {
  regex = /[aeiou]/g;
  return str.match(regex).join("") + str.replace(regex, "");
}
