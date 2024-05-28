// Power of two
// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

function isPowerOfTwo(n) {
  //.. should return true or false ..
  return Math.log2(n) % 1 === 0 ? true : false;
}
