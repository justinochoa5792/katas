// Instant JAZZ
// Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

function jazzify(arr) {
  return arr.map((item) => (item.includes(7) ? item : `${item}7`));
}
