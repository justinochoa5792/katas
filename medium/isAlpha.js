// Is the Sum of Letters Even or Odd?
// Create a function that takes a string and returns true if the sum of the position of every letter in the alphabet is even and false if the sum is odd.

function isAlpha(word) {
  let words = word.toLowerCase().replace(/[^a-z]/g, "");
  words = words.split("").map((v) => v.charCodeAt() - 96);
  return words.reduce((a, b) => a + b) % 2 === 0 ? true : false;
}
