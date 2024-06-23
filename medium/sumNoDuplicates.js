// Sum a list but ignore any duplicates
// Please write a function that sums a list, but ignores any duplicate items in the list.

function sumNoDuplicates(numList) {
  return numList
    .filter((item) => numList.indexOf(item) == numList.lastIndexOf(item))
    .reduce((a, b) => a + b, 0);
}
