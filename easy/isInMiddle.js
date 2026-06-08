// Right in the Centre
// Write a function as the solution for this problem. This kata looks simple, but it might not be easy.

function isInMiddle(seq) {
  let index = seq.indexOf("abc");

  while (index !== -1) {
    const left = index;
    const right = seq.length - index - 3;

    if (Math.abs(left - right) <= 1) {
      return true;
    }

    index = seq.indexOf("abc", index + 1);
  }

  return false;
}
