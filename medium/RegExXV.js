// RegEx XV : Group Ranges - Negated Character Sets
// Groups and ranges indicate groups and ranges of expression characters. Negated character sets match any characters that are NOT inside of brackets [ ]. You differentiate a negated character set from a regular character set by inserting a ^ inside of the [ ].

const REGEXP = /[^a-z,A-Z,0-9]/gi;
