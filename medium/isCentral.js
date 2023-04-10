// In the Centre?
// Given a string containing mostly spaces and one non-space character, return whether the character is positioned in the very centre of the string. This means the number of spaces on both sides should be the same.

function isCentral(str) {
  return str.length % 2 === 0 ? false : true;
}
