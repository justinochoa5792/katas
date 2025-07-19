// "Center yourself", says the monk.
// Implement a function center that takes a string strng, an integer width, and an optional character fill (default: ' ') and returns a new string of length width where strng is centered and on the right and left padded with fill.

function center(strng, width, fill = " ") {
  let filler = width - strng.length;
  let left = Math.ceil(filler / 2);
  let right = Math.floor(filler / 2);
  return strng.length >= width
    ? strng
    : fill.repeat(left).concat(strng).concat(fill.repeat(right));
}
