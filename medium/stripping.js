// Stripping a Sentence Down
// Create a function which takes in a sentence str and a string of characters chars and return the sentence but with all the specified characters removed.

function stripSentence(str, chars) {
  return str.replace(new RegExp(`[${chars}]`, "ig"), "");
}
