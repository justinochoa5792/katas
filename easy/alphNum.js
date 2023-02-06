// Numbered Alphabet
// Create a function that converts a string of letters to their respective number in the alphabet.

function alphNum(str) {
  return str
    .split("")
    .map((i) => i.charCodeAt(0) - 65)
    .join(" ");
}
