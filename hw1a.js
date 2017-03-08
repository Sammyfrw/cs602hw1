var employees = require('./employeeModule');
var colors = require('colors');

//lookupByLastName action
console.log(colors.cyan("Looking up by last name, Smith..."));
console.log(employees.lookupByLastName("Smith"));

//addEmployee action
console.log(colors.cyan("Adding new employee, William Smith..."));
employees.addEmployee("William", "Smith");

//examining the employee list after adding
console.log(colors.cyan("Looking up by last name, Smith, again..."));
console.log(employees.lookupByLastName("Smith"));

//lookupByID actions
console.log(colors.cyan("Looking up by id number 2..."));
selectedEmployee = employees.lookupById(2);
console.log(selectedEmployee);

console.log(colors.cyan("Changing first name of selected employee..."));
selectedEmployee.firstName = "Mary";

//checking result of name changing actions
console.log(colors.cyan("Looking up by id number 2 again..."));
selectedEmployee = employees.lookupById(2);
console.log(selectedEmployee);

console.log(colors.cyan("Looking up by last name, Smith once more..."));
console.log(employees.lookupByLastName("Smith"));
