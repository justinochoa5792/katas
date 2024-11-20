// Exclamation marks series #8: Move all exclamation marks to the end of the sentence
// Move all exclamation marks to the end of the sentence

function remove(string) {
  //coding and coding....
  let exclamation = string.match(/[!]/gi);
  return exclamation == null
    ? string
    : string.replaceAll("!", "").concat(exclamation.join(""));
}
