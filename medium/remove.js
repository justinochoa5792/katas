// Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark
// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

function remove(string) {
  //coding and coding....
  return string
    .split(" ")
    .filter((word) => !word.includes("!") || word.split("!").length - 1 !== 1)
    .join(" ");
}
