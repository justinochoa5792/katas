// Simple Pig Latin
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  //Code here
  let regex = /[.!?]/gi;
  return str
    .split(" ")
    .map((el) =>
      regex.test(el)
        ? el
        : el.slice(1, el.length).concat(el.substring(0, 1)).concat("ay")
    )
    .join(" ");
}
