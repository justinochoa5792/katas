// Luke, I Am Your ...
// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

function relationToLuke(name) {
  switch (name) {
    case "Darth Vader":
      return "Luke, I am your father.";
      break;
    case "Leia":
      return "Luke, I am your sister.";
      break;
    case "Han":
      return "Luke, I am your brother in law.";
      break;
    default:
      return "Luke, I am your droid.";
  }
}
