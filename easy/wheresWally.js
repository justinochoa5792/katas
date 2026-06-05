// Where's Wally
// Write a function that returns the index of the first occurrence of the word "Wally".
// "Wally" must not be part of another word, but it can be directly followed by a punctuation mark.
// If no such "Wally" exists, return -1.

function wheresWally(string) {
  //return index or -1 if no valid occurrences
  const match = string.match(/(^| )Wally\b/);
  return match ? match.index + match[1].length : -1;
}
