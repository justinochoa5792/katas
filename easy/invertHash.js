// Inverting a Hash
// Given a Hash made up of keys and values, invert the hash by swapping them.

function invertHash(hash) {
  return Object.fromEntries(
    Object.entries(hash).map(([key, value]) => [value, key])
  );
}
