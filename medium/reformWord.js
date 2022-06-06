// Re-Form the Word
// A word has been split into a left part and a right part. Re-form the word by adding both halves together, changing the first character to an uppercase letter.

function getWord(left, right) {
  let newLeft = left.charAt(0).toUpperCase() + left.slice(1);
  return newLeft.concat(right);
}
