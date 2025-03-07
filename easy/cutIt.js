// Training JS #16: Methods of String object--slice(), substring() and substr()
// The first mission: Traversing arr, find the shortest string length.
// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

function cutIt(arr) {
  //coding here...
  let shortest = Math.min(...arr.map((el) => el.length));

  return arr.map((el) => el.slice(0, shortest));
}
