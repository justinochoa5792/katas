// Bases Everywhere
// You will have to create a function which takes in a sequence of numbers in random order and you will have to return the correct base of those numbers.
// The base is the number of unique digits. For example, a base 10 number can have 10 unique digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 and a base 2 number (Binary) can have 2 unique digits: 0 and 1.

function baseFinder(seq) {
  //Good luck!
  const allDigits = seq.join("").match(/\d/g);
  return new Set(allDigits).size;
}
