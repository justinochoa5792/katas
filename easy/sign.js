// Sign in/Sign out but sign it
// The function may return 1, -1, 0 or NaN representing "positive number", "negative number", "zero" or NaNrespectively.
// If a string argument may be converted to number then sign should return the sign of this number.

function sign(number) {
  // ...
  const num = Number(number);

  if (Number.isNaN(num)) return NaN;
  if (num > 0) return 1;
  if (num < 0) return -1;
  return 0;
}
