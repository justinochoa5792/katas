// Football Points
// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
function footballPoints(wins, draws, losses) {
  let w = wins * 3;
  let d = draws * 1;
  let l = losses * 0;
  return w + d + l;
}
