// Reverse Words Starting With a Particular Letter
// Write a function that reverses all the words in a sentence that start with a particular letter.

function specialReverse(s, c) {
  return s
    .split(" ")
    .map((item) =>
      item.startsWith(c) ? item.split("").reverse().join("") : item
    )
    .join(" ");
}
