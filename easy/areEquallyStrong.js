// Simple Fun #69: Are Equally Strong?
// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  //coding and coding..
  return (
    Math.max(yourLeft, yourRight) == Math.max(friendsLeft, friendsRight) &&
    Math.min(yourLeft, yourRight) == Math.min(friendsLeft, friendsRight)
  );
}
