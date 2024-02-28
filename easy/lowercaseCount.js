// Regex count lowercase letters
// Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str) {
  let regex = /[a-z]/g;
  //How many?
  return str.match(regex) == null ? 0 : str.match(regex).length;
}
