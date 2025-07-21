// Sort by Example
// Given an Array and an Example-Array to sort to, write a function that sorts the Array following the Example-Array.
// Assume Example Array catalogs all elements possibly seen in the input Array. However, the input Array does not necessarily have to have all elements seen in the Example.

function exampleSort(arr, exampleArr) {
  const indexMap = new Map();
  exampleArr.forEach((val, idx) => indexMap.set(val, idx));

  return arr.sort((a, b) => indexMap.get(a) - indexMap.get(b));
}
