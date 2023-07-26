// Characters and ASCII Code
// Write a function that transforms an array of characters into an array of objects, where:
// The keys are the characters themselves.
// The values are the ASCII codes of those characters.

function toObj(arr) {
  return arr.map((el) => ({ [el]: el.charCodeAt(0) }));
}
