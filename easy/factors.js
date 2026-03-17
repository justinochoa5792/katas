// Find Factors Down to Limit
// In this Kata you have to find the factors of integer down to the limit including the limiting number. There will be no negative numbers. Return the result as an array of numbers in ascending order.

function factors(integer, limit) {
  //your code here
  let total = [];
  if (limit > integer) return [];

  for (let i = limit; i <= integer; i++) {
    if (integer % i === 0) {
      total.push(i);
    }
  }
  return total;
}
