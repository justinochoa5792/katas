// Smash Factor
// Create a function that takes ball speed bs and club speed cs as arguments and returns the smash factor to the nearest hundredth.

function smashFactor(bs, cs) {
  return Number((bs / cs).toFixed(2));
}
