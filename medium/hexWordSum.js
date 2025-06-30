//Hex Word Sum
// As hex values can include letters A through to F, certain English words can be spelled out, such as CAFE, BEEF, or FACADE. This vocabulary can be extended by using numbers to represent other letters, such as 5EAF00D, or DEC0DE5.
// Given a string, your task is to return the decimal sum of all words in the string that can be interpreted as such hex values.

function hexWordSum(string) {
  const chars = { "O": "0", "S": "5" };
  return string
    .replace(/[OS]/g, (m) => chars[m])
    .split(" ")
    .map((word) => (/^[0-9A-F]+$/.test(word) ? parseInt(word, 16) : 0))
    .reduce((sum, val) => sum + val, 0);
}
