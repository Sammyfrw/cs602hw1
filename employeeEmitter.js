const EventEmitter = require('events').EventEmitter;
const inherits = require('util').inherits;
const _ = require('underscore');

//Class definition
class EmployeeEmitter extends EventEmitter {
  constructor(args) {
    super();
    this.data = args;
  }
}

//Function definitions
//lookup by id; where an id is found, that employee's object is returned
EmployeeEmitter.prototype.lookupById = function (pid) {
  this.emit('lookupById', pid);
  employee = _.findWhere(this.data, {id: pid});
  return employee;
};

//Lookup by lastName; where names are found that object is added to an array which is later returned
EmployeeEmitter.prototype.lookupByLastName = function (name) {
  this.emit('lookupByLastName', name);
  employeeList = _.where(this.data, {lastName: name})
  return employeeList;
};

//Add a new employee with the new first and last name; an ID is supplied
EmployeeEmitter.prototype.addEmployee = function (newFirstName, newLastName) {
  this.emit('addEmployee', newFirstName, newLastName);

  //Plucking list of all ids to find max ID; set new ID to 1 if array is empty
  idList = _.pluck(this.data, 'id');
  if (_.isEmpty(idList)) {
    newId = 1;
  }  else {
    newId = _.max(idList) + 1;
  }

  //Create new employee and add to array
  newEmployee = {id: newId, firstName: newFirstName, lastName: newLastName};
  this.data.push(newEmployee);
  console.log("Successfully added new employee with data:");
  console.log(newEmployee);
};

module.exports.EmployeeEmitter = EmployeeEmitter;
