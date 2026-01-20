// Closest to Zero
// List is always not empty and contains only integers. Return None if it is not possible to define only one of such values. And of course, we are expecting 0 as closest value to zero.

const minAbs = Math.min(...arr.map((n) => Math.abs(n)));

const hasPos = arr.includes(minAbs);
const hasNeg = arr.includes(-minAbs);

if (hasPos && hasNeg && minAbs !== 0) return null;

return hasPos ? minAbs : -minAbs;
