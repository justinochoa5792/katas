// True Min
// The Math.min function has stopped working, so we have to use our own function. We are off to a good start, but this function doesn't seem to handle everything properly. Add in the proper checks to return NaN for anything that isn't an actual number, except treat null like 0.

function min(a, b) {
  if (a === null) a = 0;
  if (b === null) b = 0;

  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    Number.isNaN(a) ||
    Number.isNaN(b)
  ) {
    return NaN;
  }

  return a < b ? a : b;
}
