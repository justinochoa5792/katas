// Return the Middle Character(s) of a String
// Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

function getMiddle(str) {
  let even = str.substr(str.length / 2 - 1, 2);
  let odd = str.substr(str.length / 2, 1);

  return str.split("").length % 2 == 0 ? even : odd;
}
