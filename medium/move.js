// Change Every Letter to the Next Letter
// Write a function that changes every letter to the next letter:
// "a" becomes "b"
// "b" becomes "c"
// "d" becomes "e"
// and so on ...

function move(word) {
  let split = word.split("").map((el) => el.charCodeAt(0) + 1);
  return split.map((el) => String.fromCharCode(el)).join("");
}
