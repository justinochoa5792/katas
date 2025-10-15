// Swap the head and the tail
// You need to swap the head and the tail of the specified array:
// the head (the first half) of array moves to the end, the tail (the second half) moves to the start. The middle element (if it exists) leaves on the same position.
// Return new array.

function swapHeadAndTail(arr) {
  if (arr.length < 2) return arr; // nothing to swap

  const half = Math.floor(arr.length / 2);
  const head = arr.slice(0, half);
  const tail = arr.slice(-half);

  if (arr.length % 2 === 0) {
    return tail.concat(head);
  } else {
    const middle = arr[half];
    return tail.concat([middle], head);
  }
}
