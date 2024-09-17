// Coding Meetup #11 - Higher-Order Functions Series - Find the average age
// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

function getAverageAge(list) {
  // thank you for checking out the Coding Meetup kata :)
  let age = list.map((el) => el.age);
  return Math.round(age.reduce((a, b) => a + b) / age.length);
}
