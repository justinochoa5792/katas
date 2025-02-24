// A wolf in sheep's clothing
// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

function warnTheSheep(queue) {
  let sheep = queue
    .join(" ")
    .split("wolf")[1]
    .split(" ")
    .filter((el) => el !== "").length;
  return queue[queue.length - 1] === "wolf"
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${sheep}! You are about to be eaten by a wolf!`;
}
