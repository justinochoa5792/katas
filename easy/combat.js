// Grasshopper - Terminal game combat function
// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
  // Write your code here
  let dmg = health - damage;
  return dmg >= 0 ? health - damage : 0;
}
