// 99 Problems, #1: last in list
// Write a function last that accepts a list and returns the last element in the list.
// If the list is empty:just return null

const last = (xs) => (xs.length == 0 ? null : xs.pop());
