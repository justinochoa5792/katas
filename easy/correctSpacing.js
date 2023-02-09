// Fix the Spacing
// Additional spaces have been added to a sentence. Return the correct sentence by removing them. All words should be separated by one space, and there should be no spaces at the beginning or end of the sentence.

function correctSpacing(sentence) {
  return sentence
    .split(" ")
    .filter((i) => i !== "")
    .join(" ");
}
