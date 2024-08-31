// Playing with digits
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

function digPow(n, p) {
  // ...
  //   If you are struggling with understanding what k stands for it's the result of addition divided by initial number (n)
  let result = n
    .toString()
    .split("")
    .map((el, i) => Math.pow(Number(el), p++))
    .reduce((a, b) => a + b);
  let k = result / n;
  return k - Math.floor(k) !== 0 ? -1 : k;
}
