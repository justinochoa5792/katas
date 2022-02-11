// Owofied a Sentence
// Create a function that takes a sentence and turns every "i" into "wi" and "e" into "we", and add "owo" at the end.

function owofied(sentence) {
  let newSen = sentence.replace(/[i]/g, "wi") + " owo";
  return newSen.replace(/[e]/g, "we");
}
