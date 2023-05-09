// Free Throw Probability
// What's the probability of someone making a certain amount of free throws in a row given their free throw success percentage? If Sally makes 50% of her free shot throws, then Sally's probability of making 5 in a row would be 3%.

function freeThrows(success, rows) {
  return `${Math.round(Math.pow(parseInt(success) / 100, rows) * 100)}%`;
}
