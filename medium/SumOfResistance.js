// Sum of Resistance in Series Circuits
// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

function seriesResistance(arr) {
  let total = arr.reduce((a, b) => a + b);
  return total <= 1 ? `${total} ohm` : `${total} ohms`;
}
