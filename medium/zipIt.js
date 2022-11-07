// Zip It, If You Can?
// Return "sizes don't match" if the two arrays have different sizes.
// If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.

function zipIt(women, men) {
  return women.length !== men.length
    ? "sizes don't match"
    : women.map((elem, index) => [elem, men[index]]);
}
