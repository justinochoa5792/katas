// Music 1: How Many Quarter Notes?
// Given a time signature (as a string), you must find the amount of quarter notes that can be fit into one measure, which will be returned as an unsigned integer. If a non-integer number of quarter notes can be fit into a measure, the value should be floored. DO NOT RETURN A NON INTEGER.

function findQuarterNotes(timeSignature) {
  const [top, bottom] = timeSignature.split("/").map(Number);

  if (bottom <= 0 || (bottom & (bottom - 1)) !== 0) {
    return null;
  }

  return Math.floor((top * 4) / bottom);
}
