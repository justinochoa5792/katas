// Collatz Conjecture Length
// Write a program that will output the length of the Collatz Conjecture for any given n.

function collatz(n) {
  //your code here
  let l = 1;

  while (n > 1) {
    l++;
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;
  }
  return l;
}
