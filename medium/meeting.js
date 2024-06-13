// The Office IV - Find a Meeting Room
// In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

function meeting(x) {
  let empty = x
    .map((el, i) => (el === "O" ? i : "busy"))
    .filter((el) => typeof el === "number");
  return empty.length === 0 ? "None available!" : empty[0];
}
