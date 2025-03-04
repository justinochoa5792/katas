// UEFA EURO 2016
// Finish the uefaEuro2016() function so it return string just like in the examples below:

function uefaEuro2016(teams, scores) {
  // your code...
  return scores[0] > scores[1]
    ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    : scores[0] < scores[1]
    ? `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    : `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
}
