// RegEx: Boundary Assertions I
// Assume a program only reads .js or .jsx files. Write a function that accepts a file path and returns true if it can read the file and false if it can't.

function isJS(path) {
  return path.match(/.js/gi) ? true : false;
}
