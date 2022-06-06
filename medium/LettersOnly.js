// Letters Only
// Write a function that removes any non-letters from a string, returning a well-known film title.

function lettersOnly(str) {
  return str.replace(/[^A-Za-z]/g, "");
}
