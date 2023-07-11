// Is it a Valid Floating Numeric Character?
// Create a regular expression to check whether the given string is a valid floating numeric character or not.

function isFloatingCharacter(n) {
  return /^-?(\d+)?\.\d+$/.test(n);
}
