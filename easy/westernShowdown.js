// Western Showdown
// Wild Roger is participating in a Western Showdown, meaning he has to draw (pull out and shoot) his gun faster than his opponent in a gun standoff.
// Given two strings,p1 and p2, return which person drew their gun the fastest. If both are drawn at the same time, return "tie".

function showdown(p1, p2) {
  let player1 = p1.split(" ").indexOf("Bang!");
  let player2 = p2.split(" ").indexOf("Bang!");

  if (player1 > player2) {
    return "p2";
  } else if (player1 < player2) {
    return "p1";
  } else return "tie";
}
