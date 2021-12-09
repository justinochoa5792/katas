// Even and Odd Strings
// Given a one word lowercase string txt, return another string such that even-indexed and odd-indexed characters are grouped and groups are space-separated.

function evenOddString(txt) {
  let even = "";
  let odd = "";

  for (let i = 0; i < txt.length; i++) {
    i % 2 === 0 ? (even += txt[i]) : (odd += txt[i]);
  }
  return `${even} ${odd}`;
}
