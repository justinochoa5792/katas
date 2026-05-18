// Temperature analysis I
// You were given a string of integer temperature values, each separated by a space character.
// Create a function that return its lowest value, or None/null/Nothing if the string is empty.

function lowestTemp(t) {
  return t.length == 0
    ? null
    : Math.min(...t.split(" ").map((el) => Number(el)));
}
