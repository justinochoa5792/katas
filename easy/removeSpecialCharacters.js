// Remove the Special Characters from a String
// Create a function that takes a string, removes all "special" characters (e.g. ., !, @, #, $, %, ^, &, \, *, (, )) and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.

function removeSpecialCharacters(str) {
  return str.replace(/[^-_a-zA-Z0-9 ]/gi, "");
}
