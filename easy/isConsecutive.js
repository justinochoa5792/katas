// Grouping in string
// In first example same elements are grouped together: (11)(22)(33), hence it should return true
// In the second example there are two different groups of 1's: (11)2233(11), hence it should return false

const isConsecutive = (str) => {
  const seen = new Set();
  let current = null;

  for (const char of str) {
    if (char !== current) {
      if (seen.has(char)) return false;
      seen.add(current);
      current = char;
    }
  }

  return true;
};
