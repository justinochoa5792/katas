// All Inclusive?
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
// a boolean true if all rotations of strng are included in arr
// false otherwise

function containAllRots(strng, arr) {
  if (strng === "") return true;

  for (let i = 0; i < strng.length; i++) {
    let rotation = strng.slice(i) + strng.slice(0, i);
    if (!arr.includes(rotation)) {
      return false;
    }
  }
  return true;
}
