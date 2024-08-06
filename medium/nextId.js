// Smallest unused ID
// Therefore you need a method, which returns the smallest unused ID for your next new data item...

function nextId(ids) {
  //this will be awesome!
  let total = [];
  let id = Array.from(new Set(ids));
  for (let i = 0; i <= ids.length; i++) {
    total.push(i);
  }
  return total.filter((element) => !id.includes(element))[0];
}
