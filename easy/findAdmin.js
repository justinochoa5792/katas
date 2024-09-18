// Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
// Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins

function findAdmin(list, lang) {
  // thank you for checking out the Coding Meetup kata :)
  return list.filter((el) => el.githubAdmin === "yes" && el.language === lang);
}
