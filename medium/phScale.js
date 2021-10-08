// The pH Scale
// Given a pH value, return whether that value is "alkaline" (greater than 7), "acidic" (less than 7), or "neutral" (7). Return "invalid" if the value given is less than 0 or greater than 14.

function pHName(pH) {
  if (pH > 14 || pH < 0) {
    return "invalid";
  } else if (pH > 7) {
    return "alkaline";
  } else if (pH < 7) {
    return "acidic";
  } else return "neutral";
}
