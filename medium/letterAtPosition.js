// Position in the Alphabet
// Given a number between 1-26, return what letter is at that position in the alphabet. Return "invalid" if the number given is not within that range, or isn't an integer.

function letterAtPosition(n) {
  return Number.isInteger(n) && n > 0 ? String.fromCharCode(96 + n) : "invalid";
}
