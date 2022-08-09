// Move Capital Letters to the Front
// Create a function that moves all capital letters to the front of a word.

function capToFront(s) {
  return s.match(/[A-Z]/g).join("") + s.match(/[a-z]/g).join("");
}
