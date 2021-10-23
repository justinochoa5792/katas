// The Study of Wumbology
// Create a function that flips M's to W's (all uppercase).

function wumbo(words) {
  return words
    .split(" ")
    .map((word) => word.replace("M", "W"))
    .join(" ");
}
