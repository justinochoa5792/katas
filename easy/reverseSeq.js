// Reversed sequence
// Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = (n) => {
  let total = [];

  for (let i = n; i >= 1; i--) {
    total.push(i);
  }

  return total;
};
