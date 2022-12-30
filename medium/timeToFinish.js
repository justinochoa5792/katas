// Finish the Sentence You're On!
// For this challenge, it takes 0.5 seconds to write a character (not including spaces). Given the full sentence and the unfinished sentence as inputs, return the time it takes to finish writing in seconds.

function timeToFinish(full, part) {
  let leftOver =
    full.replace(/\s/g, "").length - part.replace(/\s/g, "").length;
  return leftOver * 0.5;
}
