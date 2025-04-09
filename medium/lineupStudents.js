// Suzuki needs help lining up his students!
// You will be given a string of student names. Sort them and return a list of names in descending order.

function lineupStudents(students) {
  //your code here
  return students
    .split(" ")
    .sort((a, b) => b.length - a.length || b.localeCompare(a));
}
