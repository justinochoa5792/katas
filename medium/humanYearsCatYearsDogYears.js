// Cat years, Dog years
// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]

var humanYearsCatYearsDogYears = function (humanYears) {
  // Your code here!
  if (humanYears === 1) {
    return [humanYears, 15, 15];
  } else if (humanYears === 2) {
    return [humanYears, 24, 24];
  } else {
    return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
  }
};
