// Remove Repeated Characters
// Create a function that will remove any repeated character(s) in a word passed to the function. Not just consecutive characters, but characters repeating anywhere in the input.

function unrepeated(str) {
  let split = str.split("");
  split = [...new Set(split)];
  return split.join("");
}
