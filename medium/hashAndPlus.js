// Hashes and Pluses
// Create a function that returns the number of hashes and pluses in a string.

function hashPlusCount(str) {
  let hash = str.split("").filter((item) => item === "#").length;
  let plus = str.split("").filter((item) => item === "+").length;
  return [hash, plus];
}
