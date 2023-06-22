// Replacing Letters with Hashes
// Write a function that replaces all letters within a specified range with the hash symbol #.

function replace(str, r) {
  let regex = new RegExp(`[${r}]`, "gi");
  return str.replace(regex, "#");
}
