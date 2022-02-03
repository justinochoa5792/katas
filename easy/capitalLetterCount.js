// Count the Capital Letters
// Given a string of letters, how many capital letters are there?

function capitalLetters(str) {
  return str.replace(/[a-z]/g, "").length;
}
