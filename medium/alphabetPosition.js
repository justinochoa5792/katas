// Replace With Alphabet Position
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

function alphabetPosition(text) {
  return text
    .replace(/[^a-z]/gi, "")
    .toLowerCase()
    .split("")
    .map((el) => el.charCodeAt(0) - 96)
    .join(" ");
}
