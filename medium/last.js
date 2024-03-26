// Sort by Last Char
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

function last(x) {
  return x
    .split(" ")
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}
