// The Hashtag Generator
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
  let word = str
    .split(" ")
    .map((el) => el.substring(0, 1).toUpperCase().concat(el.slice(1)))
    .join("");
  return word.length >= 140 || !str.trim() ? false : "#".concat(word);
}
