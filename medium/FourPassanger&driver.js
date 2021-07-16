// Four Passengers and a Driver
// A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.

function carsNeeded(n) {
  return Math.ceil(n / 5);
}
