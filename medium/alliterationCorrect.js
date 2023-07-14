// Amazing Alliteration
// Alliteration refers to a sequence of words that begin with the same letter. For this exercise, a sentence is correctly alliterated if all words strictly greater than 3 characters begin with the same letter.

function alliterationCorrect(sentence) {
  let allarr = sentence
    .split(" ")
    .filter((e) => e.length > 3)
    .map((e) => e.toLowerCase());
  return allarr.every((e) => e.startsWith(allarr[0][0]));
}
