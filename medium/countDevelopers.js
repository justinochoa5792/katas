// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
// Your task is to return the number of JavaScript developers coming from Europe.

function countDevelopers(list) {
  // your awesome code here :)
  return list.filter(
    (con) => con.continent === "Europe" && con.language === "JavaScript"
  ).length;
}
