var colors = require('colors');
var EmployeeEmitter = require('./employeeEmitter').EmployeeEmitter;

//Data definition
var data = [
  {id:1, firstName:'John',lastName:'Smith'},
  {id:2, firstName:'Jane',lastName:'Smith'},
  {id:3, firstName:'John',lastName:'Doe'}
 ];

//create new EmployeeEmitter object with data
 var employees = new EmployeeEmitter(data);

//Event handler definitions
employees.on('lookupById', function (id) {
  console.log(colors.green("Looking up employee with ID: " + id));
});

employees.on('lookupByLastName', function (name) {
  console.log(colors.green("Looking up employees with the last name: " + name));
});

employees.on('addEmployee', function (newFirstName, newLastName) {
  console.log(colors.green("Adding employee named: " + newFirstName + "" + newLastName));
});

//Testing event handlers and lookups
console.log(colors.cyan("Looking up Smith..."));
console.log(employees.lookupByLastName('Smith'));

console.log(colors.cyan("Adding new employee William Smith..."));
employees.addEmployee('William', 'Smith');

console.log(colors.cyan("Looking up Smith..."));
console.log(employees.lookupByLastName('Smith'));

console.log(colors.cyan("Looking up employee with ID 2..."));
console.log(employees.lookupById(2));

