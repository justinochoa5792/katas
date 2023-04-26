// Extend the Vowels
// Create a function that takes a word and extends all vowels by a number num.

function extendVowels(word, num) {
  let regex = /[aeiou]/gi;
  if (num % 1 != 0 || num < 0) {
    return "invalid";
  } else {
    return word
      .split("")
      .map((el) => (el.match(regex) && num > 0 ? el.repeat(num + 1) : el))
      .join("");
  }
}
