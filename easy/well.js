// Well of Ideas - Easy Version
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x) {
  let ideas = x.filter((el) => el === "good");
  return ideas.length === 0
    ? "Fail!"
    : ideas.length > 2
    ? "I smell a series!"
    : "Publish!";
}
