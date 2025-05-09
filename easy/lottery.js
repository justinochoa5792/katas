// Lottery machine
// Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

function lottery(str) {
  //your code is here...
  return !str.match(/[\d]/gi)
    ? "One more run!"
    : Array.from(new Set(str.match(/[\d]/gi))).join("");
}
