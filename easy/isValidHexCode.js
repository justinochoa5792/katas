// Valid Hex Code
// Create a function that determines whether a string is a valid hex code.
// A hex code must begin with a pound key # and is exactly 6 characters in length. Each character must be a digit from 0-9 or an alphabetic character from A-F. All alphabetic characters may be uppercase or lowercase.

function isValidHexCode(str) {
  return /^#[a-f0-9]{6}$/i.test(str);
}
