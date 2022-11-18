//Remove the Letters ABC
// Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.

function removeABC(str) {
  return str.match(/[abc]/gi) ? str.replace(/[abc]/gi, "") : null;
}
