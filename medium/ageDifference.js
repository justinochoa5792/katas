// Age Difference Between Spouses
// Create a function that determines the age difference between spouses in a household. The ages ages in years of the parents and their children are given in an array.

function ageDifference(ages) {
  let sortedAge = ages.sort((a, b) => a - b);
  let largest = sortedAge[sortedAge.length - 1];
  let second = sortedAge[sortedAge.length - 2];
  let total = largest - second;
  if (total === 1) {
    return `${total} year`;
  } else if (total > 1) {
    return `${total} years`;
  } else return "No age difference between spouses.";
}
