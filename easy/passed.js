// Driving School Series #1
// Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.
// At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.

function passed(list) {
  //Good luck!
  let filtered = list.filter((el) => el <= 18);
  let total = filtered.reduce((a, b) => a + b, 0) / filtered.length;
  return !total ? "No pass scores registered." : Math.round(total);
}
