// Sum and Length
// In this kata you must return a string value, where the first part is the sum of positive numbers and the second part is the number of negative numbers.

function sumLength(arr) {
  //Your amasing code !!
  let posSum = 0;
  let negCount = 0;
  let zeroCount = 0;

  for (const n of arr) {
    if (n > 0) {
      posSum += n;
    } else if (n < 0) {
      negCount++;
    } else {
      zeroCount++;
      zeroCount % 2 === 1 ? negCount++ : (posSum += 0);
    }
  }

  return `${posSum} ${negCount}`;
}
