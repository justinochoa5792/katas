// Coding Meetup #2 - Higher-Order Functions Series - Greet developers
// Your task is to return an array where each object will have a new property 'greeting' with the following string value:
// Hi < firstName here >, what do you like the most about < language here >?

function greetDevelopers(list) {
  // thank you for checking out my kata :)
  list.map(
    (el) =>
      (el.greeting = `Hi ${el.firstName}, what do you like the most about ${el.language}?`)
  );
  return list;
}
