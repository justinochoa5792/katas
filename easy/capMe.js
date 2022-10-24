// Capitalize the Names
// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

function capMe(arr) {
  return arr
    .map((item) => item.toLowerCase())
    .map((item) => item.replace(item[0], item[0].toUpperCase()));
}
