// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
// Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

function countLanguages(list) {
  // thank you for checking out the Coding Meetup kata :)
  return list
    .map((el) => el.language)
    .reduce(function (value, value2) {
      return value[value2] ? ++value[value2] : (value[value2] = 1), value;
    }, {});
}
