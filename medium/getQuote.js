// Batman Quotes
// Implement the getQuote method which takes in an array of quotes, and a string comprised of letters and a single number (e.g. "Rob1n") where the number corresponds to their quote indexed in the passed in array.

var getQuote = function (quotes, hero) {
  // ...
  let idx = hero.match(/[\d]/gi).join("");
  let name = hero.startsWith("B")
    ? "Batman"
    : hero.startsWith("J")
    ? "Joker"
    : "Robin";
  return `${name}: ${quotes.filter((el, i) => i == idx)[0]}`;
};
