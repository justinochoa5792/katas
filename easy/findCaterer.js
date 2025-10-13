// Find your caterer
// You need to hire a catering company out of three for lunch in a birthday party. The first caterer offers only a basic buffet which costs $15 per person. The second one has an economy buffet at $20 per person and the third one has a premium buffet at $30 per person. The third one gives a 20% discount if the number of persons to be served is greater than 60. You want to spend the maximum that fits into the budget.
// The function takes two arguments denoting the budget in $ and the number of people. Return 1, 2 or 3 for the three caterers as per the above criteria. Return -1 if there are no people or the budget is lower than the cost of buffets from the first caterer.

function findCaterer(budget, people) {
  let first = people * 15;
  let second = people * 20;
  let third = people * 30;
  if (people > 60) {
    third = third - third * 0.2;
  }
  return people == 0 || budget < first
    ? -1
    : budget >= third
    ? 3
    : budget >= second
    ? 2
    : 1;
}
