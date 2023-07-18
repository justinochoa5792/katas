// Coaxial Cable Impedance
// Create a function that takes the values Dd (Dielectric Outer Diameter), Dc (Inner Conductor Diameter) and er (Dielectric Constant) and calculates the Coaxial Cable Impedance.

function impedanceCalculator(Dd, Dc, er) {
  return Math.round((138 * Math.log10(Dd / Dc)) / Math.sqrt(er));
}
