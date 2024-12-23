// Slaphead
// You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:
// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"

function bald(x) {
  let split = x.split("/");
  if (split.length == 1) {
    return [`${x.replaceAll("/", "-")}`, "Clean!"];
  } else if (split.length == 2) {
    return [`${x.replaceAll("/", "-")}`, "Unicorn!"];
  } else if (split.length == 3) {
    return [`${x.replaceAll("/", "-")}`, "Homer!"];
  } else if (split.length >= 4 && split.length <= 6) {
    return [`${x.replaceAll("/", "-")}`, "Careless!"];
  } else {
    return [`${x.replaceAll("/", "-")}`, "Hobo!"];
  }
}
