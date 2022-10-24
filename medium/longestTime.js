// A Long Long Time
// Create a function that takes three values:
// h hours
// m minutes
// s seconds
// Return the value that's the longest duration.

function longestTime(h, m, s) {
  let hours = h * 3600;
  let mins = m * 60;
  if (hours > mins && hours > s) {
    return h;
  } else if (mins > hours && mins > s) {
    return m;
  } else {
    return s;
  }
}
