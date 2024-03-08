// Find the Difference in Age between Oldest and Youngest Family Members
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages) {
  let youngest = ages.sort((a, b) => b - a).pop();
  let oldest = ages.sort((a, b) => b - a).slice(0, 1);
  return [youngest, oldest[0], oldest[0] - youngest];
}
