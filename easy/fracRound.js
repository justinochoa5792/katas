// Fractions and Rounding
// Given a fraction frac (given in the format "1/2" for example) and n number of decimal places, return a sentence in the following format:

function fracRound(frac, n) {
  let update = frac.split("/");
  let total = Number(update[0]) / Number(update[1]);
  return `${frac} rounded to ${n} decimal places is ${total.toFixed(n)}`;
}
