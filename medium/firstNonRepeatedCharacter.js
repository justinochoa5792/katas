// Find the First Non-Repeated Character
// Create a function that accepts a string as an argument and returns the first non-repeated character.

function firstNonRepeatedCharacter(str) {
  for (var i = 0; i < str.length; i++) {
    var c = str.charAt(i);
    if (str.indexOf(c) == i && str.indexOf(c, i + 1) == -1) {
      return c;
    }
  }
  return false;
}
