// Odd-Even String SortOdd-Even String Sort
// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

function sortMyString(S) {
  // your code here
  let even = [];
  let odd = [];
  S.split("").map((el, i) => (i % 2 === 0 ? even.push(el) : odd.push(el)));
  return `${even.join("")} ${odd.join("")}`;
}
