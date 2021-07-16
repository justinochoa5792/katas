// Minimal VI: Ternary Operator
// In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

// original
function areTrue(a, b) {
  if (a == true) {
    if (b == true) {
      return "both";
    } else {
      return "first";
    }
  } else if ((b = true)) {
    return "second";
  } else {
    return "neither";
  }
}

// new
function areTrue(a, b) {
  if (a == true && b == true) {
    return "both";
  } else if (a == true) {
    return "first";
  } else if (b == true) {
    return "second";
  } else {
    return "neither";
  }
}
