// The old switcheroo 2
// that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

function encode(str) {
  //code me
  return str
    .split("")
    .map((el) =>
      el.match(/[a-z]/gi) ? el.toLowerCase().charCodeAt() - 96 : el
    )
    .join("");
}
