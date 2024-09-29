// Multiply Word in String
// You are to write a function that takes a string as its first parameter. This string will be a string of words.
// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.
// Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

function modifyMultiply(str, loc, num) {
  //Code here
  let word = str
    .split(" ")
    .filter((el, i) => i == loc)
    .map((el) => `${el}-`.repeat(num))
    .join("");
  return word.substring(0, word.length - 1);
}
