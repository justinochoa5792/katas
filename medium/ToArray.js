// Array from Comma-Delimited String
// Write a function that turns a comma-delimited list into an array of strings.

function toArray(str) {
  return str ? str.split(", ") : [];
}
