// Character Counter
// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.
// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"
// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

function validateWord(s) {
  s = s.toLowerCase();
  let counts = {};

  // Count occurrences of each character
  for (let char of s) {
    counts[char] = (counts[char] || 0) + 1;
  }

  // Get all the counts as an array
  let values = Object.values(counts);

  // Check if all counts are the same
  return values.every((v) => v === values[0]);
}
