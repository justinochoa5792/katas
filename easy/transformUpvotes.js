// Transform Upvotes
// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

function transformUpvotes(str) {
  let splitNum = str.split(" ").map((i) => i.replace("k", ""));
  return splitNum.map((i) => (i.includes(".") ? Number(i) * 1000 : Number(i)));
}
