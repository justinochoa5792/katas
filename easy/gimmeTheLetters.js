// From A to Z
// Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter. Note that if the range is given in capital letters, return the string in capitals also!

function gimmeTheLetters(spectrum) {
  let arr = [];
  let first = spectrum.split("-")[0];
  let second = spectrum.split("-")[1];
  first = first.charCodeAt(first);
  second = second.charCodeAt(second);
  for (let i = first; i <= second; i++) {
    arr.push(i);
  }
  return arr.map((el, i) => String.fromCharCode(el)).join("");
}
