// Welcome!
// Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
function greet(language) {
  if (language == "english") {
    return "Welcome";
  } else if (language == "dutch") {
    return "Welkom";
  } else if (language == "danish") {
    return "Velkomst";
  } else if (language == "estonian") {
    return "Tere tulemast";
  } else if (language == "irish") {
    return "Failte";
  } else if (language == "french") {
    return "Bienvenue";
  } else if (language == "latvian") {
    return "Gaidits";
  } else if (language == "german") {
    return "Willkommen";
  } else if (language == "welsh") {
    return "Croeso";
  } else if (language == "polish") {
    return "Witamy";
  } else if (language == "swedish") {
    return "Valkommen";
  } else if (language == "lithuanian") {
    return "Laukiamas";
  } else if (language == "italian") {
    return "Benvenuto";
  } else if (language == "spanish") {
    return "Bienvenido";
  } else if (language == "finnish") {
    return "Tervetuloa";
  } else if (language == "flemish") {
    return "Welgekomen";
  } else if (language == "czech") {
    return "Vitejte";
  } else {
    return "Welcome";
  }
}
