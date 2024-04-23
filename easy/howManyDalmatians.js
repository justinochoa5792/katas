// 101 Dalmatians - squash the bugs, not the dogs!
// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

const howManyDalmatians = (number) => {
  var dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIANS!!!",
  ];
  let respond =
    number <= 10
      ? dogs[0]
      : number <= 50
      ? dogs[1]
      : number == 101
      ? dogs[3]
      : dogs[2];
  return respond;
};
