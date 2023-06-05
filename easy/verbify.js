// Verbed Nouns
// Create a function that ends the first word of a phrase with "ed", essentially verbifying a noun.

function verbify(str) {
  let firstWord = str.split(" ");
  if (firstWord[0].substr(-1, 1) === "e") {
    return `${firstWord[0]}d ${firstWord[1]}`;
  } else if (firstWord[0].substr(-1, 1) === "d") {
    return str;
  } else {
    return `${firstWord[0]}ed ${firstWord[1]}`;
  }
}
