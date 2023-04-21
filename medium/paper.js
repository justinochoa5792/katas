// Simulate the Game "Rock, Paper, Scissors"
// Create a function which simulates the game "rock, paper, scissors". The function takes the input of both players (rock, paper or scissors), first parameter from first player, second from second player. The function returns the result as such:

function rps(s1, s2) {
  if (s1 === "rock" && s2 === "paper") {
    return "Player 2 wins";
  } else if (s1 === "paper" && s2 === "rock") {
    return "Player 1 wins";
  } else if (s1 === "paper" && s2 === "scissors") {
    return "Player 2 wins";
  } else if (s1 === "scissors" && s2 === "paper") {
    return "Player 1 wins";
  } else {
    return "TIE";
  }
}
