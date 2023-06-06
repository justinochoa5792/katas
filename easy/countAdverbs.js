// Counting Adverbs
// Create a function that counts the number of adverbs in a sentence. An adverb is a word that ends with ly.

function countAdverbs(sentence) {
  const regex = /[,.]/gi;
  sentence = sentence
    .split(" ")
    .map((el) => el.replace(regex, ""))
    .filter((el) => el.endsWith("ly"));
  return sentence.length;
}
