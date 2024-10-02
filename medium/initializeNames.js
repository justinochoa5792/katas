// Initialize my name
// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

function initializeNames(name) {
  // Insert your brilliant code here
  let split = name.split(" ");
  if (split.length > 2) {
    return split
      .map((el, i) =>
        i >= 1 && i < split.length - 1 ? el.substring(0, 1).concat(".") : el
      )
      .join(" ");
  } else {
    return name;
  }
}
