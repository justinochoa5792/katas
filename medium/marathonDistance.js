// 25-Mile Marathon
// Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.
// Return true if the marathon is 25 miles long, otherwise, return false.

function marathonDistance(d) {
  let total = d.reduce((a, b) => Math.abs(a + b), 0);
  return total === 25 ? true : false;
}
