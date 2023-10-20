// Love vs friendship
// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

function wordsToMarks(string) {
  //your code here
  return string
    .split("")
    .map((el) => el.charCodeAt(0) - 96)
    .reduce((a, b) => a + b, 0);
}
