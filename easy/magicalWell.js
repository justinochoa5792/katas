// Simple Fun #13: Magical Well
// You are standing at a magical well. It has two positive integers written on it: a and b. Each time you cast a magic marble into the well, it gives you a * b dollars and then both a and b increase by 1. You have n magic marbles. How much money will you make?

function magicalWell(a, b, n) {
  //coding and coding..
  let total = 0;
  while (n > 0) {
    total += a * b;
    a += 1;
    b += 1;
    n -= 1;
  }
  return total;
}
