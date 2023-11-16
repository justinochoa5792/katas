// Transportation on vacation
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

function rentalCarCost(d) {
  // Your solution here
  if (d >= 7) {
    return 40 * d - 50;
  } else if (d >= 3) {
    return 40 * d - 20;
  } else {
    return 40 * d;
  }
}
