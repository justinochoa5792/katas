//  Words that Start with a Vowel
// Write a function that retrieves all words that begin with a vowel.

function retrieve(str) {
  return str
    .toLowerCase()
    .replace(".", "")
    .split(" ")
    .filter(
      (el) =>
        el.startsWith("a") ||
        el.startsWith("e") ||
        el.startsWith("i") ||
        el.startsWith("o")
    );
}
