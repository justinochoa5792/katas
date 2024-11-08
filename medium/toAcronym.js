// Make acronym
// Rule of making acronym in this kata:
// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether

function toAcronym(inp) {
  // ...
  return inp
    .split(" ")
    .map((el) => el.substring(0, 1).toUpperCase())
    .join("");
}
