// Sort deck of cards
// Write a function sort_cards() that sorts a shuffled list of cards, so that any given list of cards is sorted by rank, no matter the starting collection.
// All cards in the list are represented as strings, so that sorted list of cards looks like this:

function sortCards(array) {
  const order = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "T", "J", "Q", "K"];

  return array.sort((a, b) => order.indexOf(a) - order.indexOf(b));
}
