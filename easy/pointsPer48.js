// NBA full 48 minutes average
// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

function pointsPer48(ppg, mpg) {
  return ppg == 0 || mpg == 0 ? 0 : Number(((ppg / mpg) * 48).toFixed(1));
}
