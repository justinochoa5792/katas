// Find The Duplicated Number in a Consecutive Unsorted List
// Find The Duplicated Number in a Consecutive Unsorted List

function findDup(arr) {
  return arr.sort((a, b) => a - b).filter((v, i, arr) => v === arr[i + 1])[0];
}
