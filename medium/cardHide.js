// Hiding the Card Number
// Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.

function cardHide(card) {
  return card.replace(/\d(?=\d{4})/g, "*");
}
