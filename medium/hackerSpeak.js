// H4ck3r Sp34k
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

function hackerSpeak(str) {
  const chars = { a: 4, e: 3, i: 1, o: 0, s: 5 };
  return str.replace(/[aeios]/g, (m) => chars[m]);
}
