// Spelling Bee
// Given a sentence spelling out a word, return true if the spelled letters match the word at the end of the string, or false otherwise.

function validateSpelling(txt) {
  txt = txt.toLowerCase().split(" ");
  let lastWord = txt.pop();
  lastWord = lastWord
    .split("")
    .map((el) => (el.match(/[.?!]/g) === null ? el : el.replace(el, "")))
    .join("");
  return txt.map((el) => el.replace(".", "")).join("") == lastWord
    ? true
    : false;
}
