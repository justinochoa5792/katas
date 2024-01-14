// Get the Middle Character
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  s = s.split("");
  let middle = Math.floor(s.length / 2);
  return s.length % 2 === 0
    ? s.filter((el, i) => i === middle || i === middle - 1).join("")
    : s.filter((el, i) => i === middle).join("");
}
