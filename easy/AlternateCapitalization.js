// Alternate capitalization
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

function capitalize(s) {
  let even = s
    .split("")
    .map((el, i) => (i % 2 === 0 ? el.toUpperCase() : el.toLowerCase()))
    .join("");
  let odd = s
    .split("")
    .map((el, i) => (i % 2 !== 0 ? el.toUpperCase() : el.toLowerCase()))
    .join("");
  return [even, odd];
}
