// One Odd and One Even
// Given a two digit number, return true if that number contains one even and one odd digit.

function oneOddOneEven(n) {
  const even = (element) => element % 2 === 0;
  const odd = (element) => element % 2 === 1;
  const split = n.toString().split("");

  if (split.some(odd) && split.some(even)) {
    return true;
  } else {
    return false;
  }
}
