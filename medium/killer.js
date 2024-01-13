// Who is the killer?
// Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

function killer(suspectInfo, dead) {
  //your code here...
  return Object.keys(suspectInfo).find((x) =>
    dead.every((y) => suspectInfo[x].includes(y))
  );
}
