// Functioninator 8000
// Create a function that takes a single word string and does the following:
// Concatenates inator to the end if the word ends with a consonant otherwise, concatenate -inator instead.
// Adds the word length of the original word to the end, supplied with '000'.

function inatorInator(inv) {
  let suffix = +`${inv.length}000`;
  let regex = /[aeiou]$/i;
  return inv[inv.length - 1].match(regex)
    ? `${inv}-inator ${suffix}`
    : `${inv}inator ${suffix}`;
}
