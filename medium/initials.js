// C.Wars
// Write a function that takes the full name of a person, and returns the initials, separated by dots ('.'). The initials must be uppercase. The last name of the person must appear in full, with its first letter in uppercase as well.

function initials(n) {
  let split = n.split(" ");
  return split
    .map((el, i) =>
      el == split[split.length - 1]
        ? el.substring(0, 1).toUpperCase().concat(el.substring(1))
        : el.substring(0, 1).toUpperCase()
    )
    .join(".");
}
