// Alternating Ones and Zeroes
// Write a function that returns true if the binary string can be rearranged to form a string of alternating 0s and 1s.

function canAlternate(s) {
  let l = s.length;
  let one = 0,
    zero = 0;
  for (let i = 0; i < l; i++) {
    if (s[i] == "0") zero++;
    else one++;
  }
  if (l % 2 == 0) {
    return one == zero;
  } else {
    return Math.abs(one - zero) == 1;
  }
}
