// Sort and Star
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

function twoSort(s) {
  return s.sort()[0].split("").join("***");
}
