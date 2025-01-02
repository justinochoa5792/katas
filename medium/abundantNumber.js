// Excessively Abundant Numbers
// An abundant number or excessive number is a number for which the sum of its proper divisors is greater than the number itself.
// The integer 12 is the first abundant number. Its proper divisors are 1, 2, 3, 4 and 6 for a total of 16 (> 12).

function abundantNumber(num) {
  let total = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (i !== num) {
        total += i;
      }
      let pair = num / i;
      if (pair !== i && pair !== num) {
        total += pair;
      }
    }
  }
  return total > num;
}
