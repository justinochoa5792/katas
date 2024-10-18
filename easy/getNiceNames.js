// Naughty or Nice?
// Santa needs you to write two functions. Both of the functions accept a sequence of objects. The first one returns a sequence containing only the names of the nice people, and the other returns a sequence containing only the names of the naughty people. Return an empty sequence [] if the result from either of the functions contains no names.

function getNiceNames(people) {
  //TODO
  let arr = [];
  return people.filter((el) => el.wasNice == true).map((el) => el.name);
}

function getNaughtyNames(people) {
  //TODO
  return people.filter((el) => el.wasNice == false).map((el) => el.name);
}
