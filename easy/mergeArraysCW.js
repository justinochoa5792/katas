// Merge two arrays
// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

function mergeArrays(a, b) {
  // your code here
  const result = [];
  let i = 0;
  let j = 0;

  while (i < a.length || j < b.length) {
    if (i < a.length) {
      result.push(a[i]);
      i++;
    }
    if (j < b.length) {
      result.push(b[j]);
      j++;
    }
  }

  return result;
}
