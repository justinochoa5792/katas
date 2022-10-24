// Capitalize the First Letter of Each Word
// Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

function makeTitle(str) {
  return str
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
}
