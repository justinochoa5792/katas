// Exclamation marks series #1: Remove an exclamation mark from the end of string
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

function remove(string) {
  //coding and coding....
  let split = string.split("");
  return split[split.length - 1] == "!"
    ? split.slice(0, split.length - 1).join("")
    : split.join("");
}
