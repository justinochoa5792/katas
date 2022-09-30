// Factor Chain
// A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

function factorChain(arr) {
  return arr.reduce((a, b, i) => arr[i] % arr[i - 1] === 0);
}
