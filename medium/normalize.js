// CAPS LOCK DAY is over!
// Create a function that takes a string. If the string is all uppercase characters, convert it to lowercase and add an exclamation mark at the end.

function normalize(str) {
  return str === str.toUpperCase()
    ? `${str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()}!`
    : str;
}
