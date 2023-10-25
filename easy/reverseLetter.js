// Simple Fun #176: Reverse Letter
// Given a string str, reverse it and omit all non-alphabetic characters.

function reverseLetter(str) {
  //coding and coding..
  return str.match(/[a-z]/gi).reverse().join("");
}
