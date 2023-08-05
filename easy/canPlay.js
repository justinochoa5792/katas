// Uno (Part 1)
// This question is inspired by the popular Uno card game.
// Write a function that takes in two arguments: (1) a player's current hand and (2) the current face-up card on the table. The function will return true if the player can make a play, or false if the player has to draw from the deck.
// A player can make a play if either:
// They have a card that is the same color as the face-up card.
// They have a card that is the same number as the face-up card.

function canPlay(hand, face) {
  return hand.some(
    (el) => el.includes(face.split(" ")[0]) || el.includes(face.split(" ")[1])
  );
}
