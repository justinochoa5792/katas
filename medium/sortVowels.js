// Sort the Vowels!
// Write a function which takes a input string s and return a string in the following way:

function sortVowels(s) {
  //code
  return typeof s !== "string"
    ? ""
    : s
        .split("")
        .map((el) => (el.match(/[aeiou]/gi) ? "|".concat(el) : el.concat("|")))
        .join("\n");
}
