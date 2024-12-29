// Find missing numbers
// You will get an array of numbers.
// Every preceding number is smaller than the one following it.
// Some numbers will be missing, for instance:

function findMissingNumbers(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let missing = [];
  for (let i = sorted[0]; i <= sorted[sorted.length - 1]; i++) {
    missing.push(i);
  }
  return missing.filter((el) => !arr.includes(el));
}
