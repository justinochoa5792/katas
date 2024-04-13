// Simple Fun #261: Whose Move
// Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.

function whoseMove(lastPlayer, win) {
  //coding and coding..
  if (lastPlayer === "black" && !win) {
    return "white";
  } else if (lastPlayer === "black" && win) {
    return "black";
  } else if (lastPlayer === "white" && !win) {
    return "black";
  } else {
    return "white";
  }
}
