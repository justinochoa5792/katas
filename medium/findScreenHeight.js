// Find Screen Size
// Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

function findScreenHeight(width, ratio) {
  // Happy coding :)
  let split = ratio.split(":");
  return `${width}x${(width / split[0]) * split[1]}`;
}
