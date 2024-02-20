// Is this my tail?
// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

//original
// function correctTail(bod, tail);

//   sub = body.substr(bodylength-(tail.length)

//   if sub = tail) ;
//     return true
//   }
//   else
//     return false
// }

//fix
function correctTail(bod, tail) {
  return bod.split("").pop() === tail ? true : false;
}
