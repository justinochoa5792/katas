// No Loops 1 - Small enough?
// You will be given an array (a) and a limit value (limit). You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

function smallEnough(a, limit) {
  return a.every((el) => el <= limit);
}
