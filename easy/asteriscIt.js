// Asterisk it
// You are given a function that should insert an asterisk (*) between every pair of even digits in the given input, and return it as a string. If the input is a sequence, concat the elements first as a string.

function asteriscIt(n) {
  // Handle number or sequence input
  const str = Array.isArray(n) ? n.join("") : n.toString();

  // Insert '*' between every pair of even digits
  return str
    .split("")
    .map((el, i, arr) => {
      const curr = Number(el);
      const next = Number(arr[i + 1]);
      return curr % 2 === 0 && next % 2 === 0 ? el + "*" : el;
    })
    .join("");
}
