// getNames()
// The following code is not giving the expected results. Can you debug what the issue is?

//original
// function getNames(data){
//     return data.map(function(item){item.name});
//   }

// fixed
function getNames(data) {
  return data.map((el) => el.name);
}
