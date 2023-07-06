// House of Cards
// The image below shows a sequence of larger and larger houses of cards, with the total number of cards included for each:

function cardsNeeded(n) {
  return n >= 0 ? (n * (3 * n + 1)) / 2 : "invalid";
}
