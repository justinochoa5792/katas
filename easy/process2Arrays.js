// Operations With Sets
// We need a function that receives two arrays, each of them with elements that occur only once. We need to know:
// Number of elements that are present in both arrays
// Number of elements that are present in only one array
// Number of remaining elements in arr1 after extracting the elements of arr2
// Number of remaining elements in arr2 after extracting the elements of arr1

function process2Arrays(arr1, arr2) {
  // your code here
  let same = arr1.filter((el) => arr2.includes(el)).length;
  let notPresent =
    arr1.filter((el) => !arr2.includes(el)).length +
    arr2.filter((el) => !arr1.includes(el)).length;
  let just1stArray = arr1.filter((el) => !arr2.includes(el)).length;
  let just2ndArray = arr2.filter((el) => !arr1.includes(el)).length;
  return [same, notPresent, just1stArray, just2ndArray];
}
