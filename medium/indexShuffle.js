// Index Shuffle
// Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

function indexShuffle(str) {
  let even = str.split("").filter((element, index, array) => {
    return index % 2 === 0;
  });
  let odd = str.split("").filter((index) => {
    return index % 2 !== 0;
  });
  return even.concat(odd).join("");
}
