// Finding Nemo
// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".
// If you can't find Nemo, return "I can't find Nemo :(".

function findNemo(sentence) {
  let nemo = sentence.split(" ").indexOf("Nemo") + 1;
  return nemo === 0 ? "I can't find Nemo :(" : `I found Nemo at ${nemo}!`;
}
