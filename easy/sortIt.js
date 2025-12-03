// Alphabetize a list by the nth character
// Write a function that accepts two parameters, i) a string (containing a list of words) and ii) an integer (n). The function should alphabetize the list based on the nth letter of each word.
// The letters should be compared case-insensitive. If both letters are the same, order them normally (lexicographically), again, case-insensitive.

function sortIt(list, n) {
  //...
  return list
    .split(",")
    .map((el) => el.trim())
    .sort((a, b) =>
      a[n - 1].toLowerCase() !== b[n - 1].toLowerCase()
        ? a[n - 1].toLowerCase().localeCompare(b[n - 1].toLowerCase())
        : a.toLowerCase().localeCompare(b.toLowerCase())
    )
    .join(", ");
}
