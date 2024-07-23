// Spanish Conjugator
// You need to write a function called conjugate which will return an object with a spanish verb conjugated. The object must look like this:

function conjugate(verb) {
  if (verb.endsWith("er")) {
    return {
      [verb]: [
        `${verb.slice(0, verb.length - 2).concat("o")}`,
        `${verb.slice(0, verb.length - 2).concat("es")}`,
        `${verb.slice(0, verb.length - 2).concat("e")}`,
        `${verb.slice(0, verb.length - 2).concat("emos")}`,
        `${verb.slice(0, verb.length - 2).concat("éis")}`,
        `${verb.slice(0, verb.length - 2).concat("en")}`,
      ],
    };
  } else if (verb.endsWith("ir")) {
    return {
      [verb]: [
        `${verb.slice(0, verb.length - 2).concat("o")}`,
        `${verb.slice(0, verb.length - 2).concat("es")}`,
        `${verb.slice(0, verb.length - 2).concat("e")}`,
        `${verb.slice(0, verb.length - 2).concat("imos")}`,
        `${verb.slice(0, verb.length - 2).concat("ís")}`,
        `${verb.slice(0, verb.length - 2).concat("en")}`,
      ],
    };
  } else {
    return {
      [verb]: [
        `${verb.slice(0, verb.length - 2).concat("o")}`,
        `${verb.slice(0, verb.length - 2).concat("as")}`,
        `${verb.slice(0, verb.length - 2).concat("a")}`,
        `${verb.slice(0, verb.length - 2).concat("amos")}`,
        `${verb.slice(0, verb.length - 2).concat("áis")}`,
        `${verb.slice(0, verb.length - 2).concat("an")}`,
      ],
    };
  }
}
