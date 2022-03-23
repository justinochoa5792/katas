// Negate the Array of Numbers
// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +

function negate(arr) {
  return arr.map((num) => num * -1);
}
