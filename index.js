/* Your Code Here */
///a function called createEmployeeRecord which returns JavaScript `Object` with keys and initializes empty `Array`s on the properties `timeInEvents`



function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

const employeeArray = ["Gray", "Worm", "Security", 1];
const employeeRecord = createEmployeeRecord(employeeArray);
console.log(employeeRecord)

///a function called createEmployeeRecords which returns Array` of `Object` and Converts each nested `Array` into an employee record using accumulates it to a new `Array` using Map method of objects

function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(array => createEmployeeRecord(array));
}

const arrayOfArrays = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ];
  
  const employeeRecords = createEmployeeRecords(arrayOfArrays);
  console.log(employeeRecords);

///function createTimein Event the date and hours format is split into an array of time and date by the split()method and the use of "this".Hours worked-2pm to 12pm-10hrs

function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeInEvents.push({
      type: 'TimeIn',
      date: date,
      hour: parseInt(hour, 10)
    });
    return this;
  }
  

  ///function createTimeOut Event the date and hours format is split into an array of time and date by the split()method and the use of "this"Hours worked-2pm to 12pm-10hr
 
  function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
    this.timeOutEvents.push({
      type: 'TimeOut',
      date: date,
      hour: parseInt(hour, 10)
    });
    return this;
  }
  
  function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100;
  }
  
  function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
  }
  
  
  function calculatePayroll(employees) {
    return employees.reduce((total, employee) => total + allWagesFor.call(employee), 0);
  }
  
  function findEmployeeByFirstName(employees, firstName) {
    return employees.find(employee => employee.firstName === firstName);
  }
  

  
  

///function createTimeOut Event the date and hours format is split into an array of time and date by the split()method


  







  // Assuming you want to do something with the record, you can log it here
 // console.log(record);

 // return record;



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
const eligibleDates = this.timeInEvents.map(function (e) {
   return e.date
 })

   const payable = eligibleDates.reduce(function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d)
   }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

   return payable
}

