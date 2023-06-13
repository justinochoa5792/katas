// International Greetings
// Write a function that takes in a name and returns a name tag, that should read:

const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};

function greeting(name) {
  return Object.keys(GUEST_LIST).includes(name)
    ? `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`
    : `Hi! I'm a guest.`;
}
