// Temperature Conversion
// Write a program that takes a temperature input in celsius and converts it to Fahrenheit and Kelvin. Return the converted temperature values in an array.

function tempConversion(celsius) {
  let f = Number.parseFloat((celsius * 9) / 5 + 32).toFixed(2);
  let k = Number(celsius + 273.15).toFixed(2);
  return k < 0 ? "Invalid" : [+f, +k];
}
