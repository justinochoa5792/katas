// Switcharoo
// Create a function that takes a string and returns a new string with its first and last characters swapped, except under three conditions:
// If the length of the string is less than two, return "Incompatible.".
// If the argument is not a string, return "Incompatible.".
// If the first and last characters are the same, return "Two's a pair.".

function flipEndChars(str) {
  if (typeof str !== "string" || str.length < 2) {
    return "Incompatible.";
  } else if (str.split("")[0] === str.split("")[str.length - 1]) {
    return "Two's a pair.";
  } else {
    return (
      str.charAt(str.length - 1) +
      str.substring(1, str.length - 1) +
      str.charAt(0)
    );
  }
}
