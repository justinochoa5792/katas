// Single Occurrence
// Create a function that, given a string str, finds a letter that has a single occurrence. Return the letter in uppercase. If the input is empty, return an empty string "".

function singleOccurrence(str) {
  str = str.toUpperCase();
  str = Array.from(str).filter((i) => str.indexOf(i) === str.lastIndexOf(i));
  return str.length == 0 ? "" : str[0];
}
