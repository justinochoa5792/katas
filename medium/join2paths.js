// Join Two Portions of a Path
// Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one separator and if it is not present it should be added.

function joinPath(portion1, portion2) {
  port1 = portion1.includes("/") ? portion1.replace("/", "") : portion1;
  port2 = portion2.includes("/") ? portion2.replace("/", "") : portion2;
  return `${port1}/${port2}`;
}
