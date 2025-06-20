// KISS - Keep It Simple Stupid
// Define a function that determines if Joe's work is simple or complex.
// Input will be non emtpy strings with no punctuation.
// It is simple if: the length of each word does not exceed the amount of words in the string (See example test cases)

function isKiss(words) {
  // Have Fun!
  let totalLength = words.split(" ").length;
  return words.split(" ").some((el) => el.length > totalLength)
    ? "Keep It Simple Stupid"
    : "Good work Joe!";
}
