// Find an employees role in the company
// You will be given an array of object literals holding the current employees of the company. You code must find the employee with the matching firstName and lastName and then return the role for that employee or if no employee is not found it should return "Does not work here!"
// The array is preloaded and can be referenced using the variable employees ($employees in Ruby). It uses the following structure.

function findEmployeesRole(name) {
  // employees array preloaded
  let filtered = employees.filter(
    (el) => name.includes(el.firstName) && name.includes(el.lastName)
  );
  return filtered.length === 0
    ? "Does not work here!"
    : filtered.map((el) => el.role)[0];
}
