// The Reverser!
// The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.

function reverse(str) {
  return str
    .split("")
    .reverse()
    .map((i) => (i === i.toLowerCase() ? i.toUpperCase() : i.toLowerCase()))
    .join("");
}
