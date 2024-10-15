// Training JS #11: loop statement --break,continue
// You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.
// When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.
// Return the bag after for loop finished.

function grabDoll(dolls) {
  var bag = [];
  //coding here
  for (let i = 0; i < dolls.length; i++) {
    if (bag.length == 3) break;

    if (
      (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") &&
      bag.length < 3
    ) {
      bag.push(dolls[i]);
    }
    if (dolls[i] !== "Hello Kitty" || dolls[i] !== "Barbie doll") continue;
  }
  return bag;
}
