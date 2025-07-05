// Hide password from jdbc url
// We have to create a function that receives a connection string with password included and you have to mask the password i.e. change password by asterisks.
// Preconditions:
// non empty valid url
// password always next to string section password=
// assume password will not contain ampersand sign for sake of simplicity
// to make it more real it has non ASCII characters
// "password=" and "user" will occur only once

function hidePasswordFromConnection(urlString) {
  let split = urlString.split("password=");
  return split[1].includes("&")
    ? `${split[0]}password=`
        .concat("*".repeat(split[1].split("&")[0].length))
        .concat(`&${split[1].split("&")[1]}`)
    : `${split[0]}password=`.concat("*".repeat(split[1].length));
}
