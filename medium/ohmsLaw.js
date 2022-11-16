// Calculate the Missing Value with Ohm's Law
// Create a function that calculates the missing value of 3 inputs using Ohm's law. The inputs are v, r or i (aka: voltage, resistance and current).

function ohmsLaw(v, r, i) {
  if (v !== "" && r !== "" && i === "") {
    return Number((v / r).toFixed(2));
  } else if (v !== "" && r === "" && i !== "") {
    return v / i;
  } else if (r !== "" && i !== "" && v === "") {
    return r * i;
  } else {
    return "Invalid";
  }
}
