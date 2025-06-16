// Which section did you scroll to?
// Given the scrollY integer (always non-negative) and an array of non-negative integers (with at least one element), calculate the index (starting at 0) or -1 if scrollY falls beyond last section (indication of an error).

// return an index of section or -1 if past last section
// scrollY is a positive integer and sizes is an array of positive integers
function getSectionIdFromScroll(scrollY, sizes) {
  let start = 0;

  for (let i = 0; i < sizes.length; i++) {
    let end = start + sizes[i] - 1;
    if (scrollY >= start && scrollY <= end) {
      return i;
    }
    start = end + 1;
  }

  return -1;
}
