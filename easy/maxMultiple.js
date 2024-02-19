// Maximum Multiple
// Given a Divisor and a Bound , Find the largest integer N , Such That ,

function maxMultiple(divisor, bound) {
  //your code here
  let total = [];
  for (let i = 1; i <= bound; i++) {
    if (i % divisor === 0) {
      total.push(i);
    }
  }
  return total.pop();
}
