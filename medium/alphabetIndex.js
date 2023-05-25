// Replace Letters With Position In Alphabet
// Create a function that takes a string and replaces each letter with its appropriate position in the alphabet. "a" is 1, "b" is 2, "c" is 3, etc, etc.

function alphabetIndex(str) {
  return str
    .toLowerCase()
    .split("")
    .filter((c) => (c >= "a") & (c <= "z"))
    .map((c) => c.charCodeAt(0) - "a".charCodeAt(0) + 1)
    .join(" ");
}
