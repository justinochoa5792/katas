// Show multiples of 2 numbers within a range
// Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.

// Javascript: return multiples into an array
function multiples(s1, s2, s3) {
  let multiples = [];
  for (let i = 1; i < s3; i++) {
    if (i % s2 == 0 && i % s1 == 0) {
      multiples.push(i);
    }
  }
  return multiples;
}
