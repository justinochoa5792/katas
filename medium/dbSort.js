// Double Sort
// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

function dbSort(a) {
  // Code here
  let arr = [];
  let alpha = [];

  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] === "number") {
      arr.push(a[i]);
      arr.sort((a, b) => a - b);
    } else {
      alpha.push(a[i]);
      alpha.sort();
    }
  }

  return arr.concat(alpha);
}
