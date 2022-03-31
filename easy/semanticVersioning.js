// Semantic Versioning
// Write three separate functions, one to retrieve each element in the semantic versioning specification.

function retrieveMajor(semver) {
  let majorVer = semver.split(".");
  return majorVer[0];
}

function retrieveMinor(semver) {
  let minorVer = semver.split(".");
  return minorVer[1];
}

function retrievePatch(semver) {
  let patchNum = semver.split(".");
  return patchNum[2];
}
