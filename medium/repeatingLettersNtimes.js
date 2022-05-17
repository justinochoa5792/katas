// Repeating Letters N Times
// Create a function that repeats each character in a string n times.

function repeat(str, n) {
  return str
    .split("")
    .map((string) => string.repeat(n))
    .join("");
}
