// Century Crisis
// You must calculate the number of people there will be in three decades from now.
// The variable population is the world population now.
// Assume that every month, someone gives birth to more people n.
// Return the number of people there will be when the spaceship is complete.

function futurePeople(population, n) {
  return population + n * 12 * 30;
}
