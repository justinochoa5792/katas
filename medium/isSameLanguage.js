// Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
// Your task is to return either:
// true if all developers in the list code in the same language; or
// false otherwise.

function isSameLanguage(list) {
  // thank you for checking out the Coding Meetup kata :)
  let arr = new Set(list.map((el) => el.language));
  return Array.from(arr).length === 1 ? true : false;
}
