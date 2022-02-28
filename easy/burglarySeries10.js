// Burglary Series (10): Calculate Difference
// Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

function calculateDifference(obj, limit) {
  let object = Object.values(obj);
  return object.reduce((accumulator, a) => accumulator + a) - limit;
}
