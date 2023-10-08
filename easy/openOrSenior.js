// openOrSenior
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

function openOrSenior(data) {
  // ...
  return data.map((el) => (el[0] >= 55 && el[1] > 7 ? "Senior" : "Open"));
}
