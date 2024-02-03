// Lario and Muigi Pipe Problem
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

function pipeFix(numbers) {
  let total = [];

  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    total.push(i);
  }
  return total;
}
