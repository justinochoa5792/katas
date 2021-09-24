// Calculating Damage
// Create a function that takes damage and speed (attacks per second) and returns the amount of damage after a given time.

function damage(damage, speed, time) {
  if (damage < 0 || speed < 0) {
    return "invalid";
  } else if (time === "minute") {
    return damage * speed * 60;
  } else if (time === "hour") {
    return damage * speed * 3600;
  } else return damage * speed;
}
