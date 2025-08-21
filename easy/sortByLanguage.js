// Coding Meetup #17 - Higher-Order Functions Series - Sort by programming language
// Write a function that returns the array sorted alphabetically by the programming language. In case there are some developers that code in the same language, sort them alphabetically by the first name:

function sortByLanguage(list) {
  // thank you for checking out the Coding Meetup kata :)
  return list.sort((a, b) =>
    a.language.localeCompare(b.language) != 0
      ? a.language.localeCompare(b.language)
      : a.firstName.localeCompare(b.firstName)
  );
}
