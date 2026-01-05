// Broken sequence
// You receive some random elements as a space-delimited string. Check if the elements are part of an ascending sequence of integers starting with 1, with an increment of 1 (e.g. 1, 2, 3, 4).

function findMissingNumber(sequence) {
  if (sequence.trim() === "") return 0;

  const parts = sequence.split(" ");

  // Validate: all must be integers
  const numbers = [];
  for (const part of parts) {
    const num = Number(part);
    if (!Number.isInteger(num)) return 1;
    numbers.push(num);
  }

  // Sort and remove duplicates
  const unique = [...new Set(numbers)].sort((a, b) => a - b);

  // Sequence must start at 1
  if (unique[0] !== 1) return 1;

  // Find the first missing number
  for (let i = 0; i < unique.length; i++) {
    if (unique[i] !== i + 1) {
      return i + 1;
    }
  }

  return 0;
}
