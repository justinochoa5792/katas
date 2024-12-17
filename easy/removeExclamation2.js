// Exclamation marks series #3: Remove all exclamation marks from sentence except at the end
// Remove all exclamation marks from sentence except at the end.

function remove(string) {
  return string.replace(/!+([^!])/g, "$1");
}
