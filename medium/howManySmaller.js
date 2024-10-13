// Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
// Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.
// The first mission: let all elements in the array keep two decimal places(No need to convert number n).
// The second mission: Traversal arr, count the number of elements which are smaller than n and return it.

function howManySmaller(arr, n) {
  //coding here..
  let smallest = [];
  for (let i = 0; i < arr.length; i++) {
    let reduced = arr[i].toFixed(2);
    if (reduced < n) {
      smallest.push(reduced);
    }
  }
  return smallest.length;
}
