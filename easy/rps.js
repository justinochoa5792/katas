// Rock, Paper, Scissors
// If p1 wins, return the string "The winner is p1". If p2 wins, return the string "The winner is p2" and if p1 and p2 are the same, return "It's a draw".

function rps(p1, p2) {
  if (p1 === "Rock" && p2 === "Paper") {
    return "The winner is p2";
  } else if (p1 === "Rock" && p2 === "Scissors") {
    return "The winner is p1";
  } else if (p1 === "Paper" && p2 === "Scissors") {
    return "The winner is p2";
  } else if (p1 === "Paper" && p2 === "Rock") {
    return "The winner is p1";
  } else if (p1 === "Scissors" && p2 === "Paper") {
    return "The winner is p1";
  } else if (p1 === "Scissors" && p2 === "Rock") {
    return "The winner is p2";
  } else {
    return "It's a draw";
  }
}
