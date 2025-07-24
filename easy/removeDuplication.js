// Remove duplication
// Write a function that accepts an array of number as parameter, and it returns array after removing all duplicated numbers.

function removeDuplication(arr) {
  // Here you Go!
  const seen = new Set();
  const duplicates = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return arr.filter((num) => !duplicates.has(num));
}
