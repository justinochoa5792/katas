// Abbreviating a Sentence
// Create a function which takes a sentence and returns its abbreviation. Get all of the words over or equal to n characters in length and return the first letter of each, capitalised and overall returned as a single string.

function abbreviate(sentence, n) {
  n = n === undefined ? (n = 4) : n;
  let abbrev = sentence.split(" ").filter((el) => el.length >= n);
  return abbrev.map((el) => el.substring(0, 1).toUpperCase()).join("");
}
