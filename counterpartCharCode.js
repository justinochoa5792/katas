// Find the Characters Counterpart Char Code
// Create a function that takes a single character as an argument and returns the char code of its lowercased / uppercased counterpart.

function counterpartCharCode(char) {
  return char === char.toUpperCase()
    ? char.toLowerCase().charCodeAt()
    : char.toUpperCase().charCodeAt();
}
