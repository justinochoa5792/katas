// Numbered Cards
// You have a pack of 5 randomly numbered cards, which can range from 0-9. You can win if you can produce a higher two-digit number from your cards than your opponent. Return true if your cards win that round.

function winRound(you, opp) {
  you = you.sort().reverse().slice(0, 2).join("");
  opp = opp.sort().reverse().slice(0, 2).join("");
  return +you > +opp ? true : false;
}
