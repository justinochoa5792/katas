// First N Mid
// Create a function that takes a string and returns the first character of every word if the length of the word is even and the middle character if the length of the word is odd.

function stmid(str) {
  return str
    .split(" ")
    .map((el) =>
      el.length % 2 === 0
        ? el.substring(0, 1)
        : el.charAt(Math.floor(el.length / 2))
    )
    .join("");
}
