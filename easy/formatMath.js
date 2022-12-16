// Neatly Formatted Math
// Given a simple math expression as a string, neatly format it as an equation.

function formatMath(expr) {
  let nums = expr.split(" ");
  let total;
  if (nums[1] === "+") {
    total = nums[0] + nums[2];
    return `${nums[0]} + ${nums[2]} = ${eval(expr)}`;
  } else if (nums[1] === "-") {
    return `${nums[0]} - ${nums[2]} = ${eval(expr)}`;
  } else if (nums[1] === "x") {
    total = nums[0] * nums[2];
    return `${nums[0]} x ${nums[2]} = ${total}`;
  } else {
    total = nums[0] / nums[2];
    return `${nums[0]} / ${nums[2]} = ${total}`;
  }
}
