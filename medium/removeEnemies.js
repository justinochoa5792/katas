// Removing Enemies
// Remove enemies from the array of people, even if the enemy shows up twice.

function removeEnemies(names, enemies) {
  return names.filter((i) => !enemies.includes(i));
}
