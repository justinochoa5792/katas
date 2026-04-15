// Pythagorean Triple
// Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.

function isPythagoreanTriple(integers) {
  // Good luck friends!
  let sorted = integers.sort((x, y) => x - y);
  return (
    Math.pow(sorted[0], 2) + Math.pow(sorted[1], 2) === Math.pow(sorted[2], 2)
  );
}
