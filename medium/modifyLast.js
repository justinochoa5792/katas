// Modifying the Last Character
// Create a function which makes the last character of a string repeat n number of times.

function modifyLast(str, n) {
  return str + str.slice(-1).repeat(n - 1);
}
