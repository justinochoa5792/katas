// Lowercase, Uppercase or Mixed?
// Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.

function getCase(str) {
  if (str === str.toUpperCase()) {
    return "upper";
  } else if (str === str.toLowerCase()) {
    return "lower";
  } else return "mixed";
}
