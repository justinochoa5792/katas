//  Who's The Oldest?
// Given an object containing the names and ages of a group of people, return the name of the oldest person.

function oldest(people) {
  people = Object.entries(people);
  let num = people.map((el) => el[1]).sort((a, b) => b - a);
  return people.filter((el) => el.includes(num[0])).flat()[0];
}
