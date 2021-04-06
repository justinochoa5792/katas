// The Farm Problem
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

function animals(chickens, cows, pigs) {
  let chick = chickens * 2;
  let cow = cows * 4;
  let pig = pigs * 4;
  return chick + cow + pig;
}
