// Daily Calorie Requirement
// Write a function that takes in an array containing a gym member´s personal details. The array will always be sorted like this:
// [name, gender (m/f), age (y), height (cm), weight (kg), activity level]
// e.g. [“Susi”, “f”, 29, 170, 60, “moderately active”]
// The function should then apply the Mifflin-St Jeor formula to calculate the member´s daily calorie requirement in kcal/day. The calculation should be rounded to 2 decimal digits.

function calorie(member) {
  //code here
  const [name, gender, age, height, weight, activity] = member;
  let level;
  let rmr;
  if (member[5] == "little activity") {
    level = 1.2;
  } else if (member[5] == "moderately active") {
    level = 1.55;
  } else if (member[5] == "very active") {
    level = 1.7;
  } else {
    level = 1.9;
  }

  if (gender === "f") {
    rmr = 10 * weight + 6.25 * height - 5 * age - 161;
  } else {
    rmr = 10 * weight + 6.25 * height - 5 * age + 5; // Changed -5 to +5
  }

  const totalCalories = rmr * level;
  const roundedCalories = Math.round(totalCalories * 100) / 100;

  const dailyCalories = roundedCalories.toFixed(2);

  return `${name}´s daily calorie requirement is ${dailyCalories} kcal.`;
}
