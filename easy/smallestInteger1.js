//Simple Fun #204: Smallest Integer
//You're given a two-dimensional array of integers matrix. Your task is to determine the smallest non-negative integer that is not present in this array.

function smallestInteger(matrix) {
  const flat = matrix.flat();
  const set = new Set(flat);

  for (let i = 0; i <= flat.length + 1; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
}
