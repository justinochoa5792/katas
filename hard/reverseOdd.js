// Reverse the Odd Length Words
// Given a string, reverse all the words which have odd length. The even length words are not changed.

function reverseOdd(str) {
  return str
    .split(" ")
    .map((el) => (el.length % 2 === 1 ? el.split("").reverse().join("") : el))
    .join(" ");
}
