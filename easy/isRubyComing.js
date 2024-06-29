// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
// Your task is to return:
// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.

function isRubyComing(list) {
  // thank you for checking out my kata :)
  return list.map((el) => el.language).includes("Ruby");
}
