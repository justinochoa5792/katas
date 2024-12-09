// Fun with lists: length
// Implement the method length, which accepts a linked list (head), and returns the length of the list.

function length(head) {
  let count = 0;
  let curr = head;
  while (curr !== null) {
    count++;
    curr = curr.next;
  }

  return !head ? 0 : count;
}
