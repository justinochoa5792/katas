// Rounding in Millions
// Given an array of cities and populations, return an array where all populations are rounded to the nearest million
function millionsRounding(arr) {
  return arr.map((city) => [city[0], Math.round(city[1] / 1000000) * 1000000]);
}
