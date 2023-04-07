// First Before Second Letter
// Write a function that returns true if every instance of the first letter occurs before every instance of the second letter.

function firstBeforeSecond(s, first, second) {
  return s.lastIndexOf(first) < s.indexOf(second) ? true : false;
}
