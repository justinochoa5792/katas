// "Very Even" Numbers.
// Write a function that returns true if the number is a "Very Even" number.
// If a number is a single digit, then it is simply "Very Even" if it itself is even.
// If it has 2 or more digits, it is "Very Even" if the sum of its digits is "Very Even".

function isVeryEvenNumber(n) {
  let length = n.toString().length;
  let total = n
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b));

  if (length == 1) {
    return length == 1 && n % 2 === 0 ? true : total % 2 === 0 ? true : false;
  } else {
    return isVeryEvenNumber(
      n
        .toString()
        .split("")
        .reduce((a, b) => Number(a) + Number(b))
    );
  }
}
