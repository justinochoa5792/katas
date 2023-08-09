// Blackjack
// Create a function that takes an array of card numbers and checks if the sum of their value exceeds 21. If the sum exceeds 21, return true and if the sum is under or equal to 21, return false. Values of the cards are as follows:
// 2-10 are their value.
// J-K (face cards) count as 10.
// Aces count either as 1 or 11 - play conservatively, so that if giving an ace a value of 11 causes you to lose and 1 allows you to win, then go with 1.

function overTwentyOne(cards) {
  let card = cards.map((item) =>
    item == "J" || item == "K" || item == "Q" ? 10 : item == "A" ? 1 : item
  );
  return card.reduce((a, b) => a + b) > 21 ? true : false;
}
