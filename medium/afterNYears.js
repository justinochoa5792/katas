// Ageing the Population...
// Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.

function afterNYears(names, n) {
  for (i in names) {
    names[i] = names[i] + Math.abs(n);
  }
  return names;
}
