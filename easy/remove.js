// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

function remove(s, n) {
  //coding and coding....
  return s.replace(/\!/g, (_) => (n && n-- ? "" : _));
}
