// sPoNgEbOb MeMe
// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.
//solution

function spongeMeme(sentence) {
  return sentence
    .split("")
    .map((el, i) => (i % 2 == 0 ? el.toUpperCase() : el.toLowerCase()))
    .join("");
}