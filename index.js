var sum = 0;
class EmployeeRecord {
  constructor(firstName, familyName, title, payPerHour) {
    this.firstName = firstName;
    this.familyName = familyName;
    this.title = title;
    this.payPerHour = payPerHour;
    this.timeInEvents = new Array();
    this.timeOutEvents = new Array();
  }
}
class TimeEvent {
  constructor(type, date, hour) {
    this.type = type;
    this.date = date;
    this.hour = hour;
  }
}
function createEmployeeRecord(array) {
  let [firstName, lastName, title, payPerHour] = array;
  let employeeRecord = new EmployeeRecord(
    firstName,
    lastName,
    title,
    payPerHour
  );
  return employeeRecord;
}
function createEmployeeRecords(records) {
  return records.map((employee) => createEmployeeRecord(employee));
}
function createTimeInEvent(datestamp) {
  let [date, hour] = datestamp.split(" ");

  let timeEvent = new TimeEvent("TimeIn", date, Number(hour));

  this.timeInEvents.push(timeEvent);

  return this;
}
function createTimeOutEvent(datestamp) {
  let [date, hour] = datestamp.split(" ");

  let timeEvent = new TimeEvent("TimeOut", date, Number(hour));

  this.timeOutEvents.push(timeEvent);

  return this;
}
function hoursWorkedOnDate(targetDate) {
  let startHour = this.timeInEvents.find(
    (timeEvent) => timeEvent.date === targetDate
  ).hour;

  let endHour = this.timeOutEvents.find(
    (timeEvent) => timeEvent.date === targetDate
  ).hour;

  return (endHour - startHour) / 100;
}
function wagesEarnedOnDate(targetDate) {
  return this.payPerHour * hoursWorkedOnDate.call(this, targetDate);
}
function allWagesFor() {
  let dates = this.timeOutEvents.map((timeEvent) => timeEvent.date);
  let sum = 0;
  dates.forEach((date) => (sum += wagesEarnedOnDate.call(this, date)));
  return sum;
}
function findEmployeeByFirstName(employeeRecords, firstNameString) {
  console.log(firstNameString);
  return employeeRecords.find(
    (employeeRecord) => employeeRecord.firstName === firstNameString
  );
  console.log(firstNameString);
}
function calculatePayroll(employeeRecords) {
  employeeRecords.forEach(
    (employeeRecord) => (sum += allWagesFor.call(employeeRecord))
  );
  return sum;
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
// const allWagesFor = function () {
//   const eligibleDates = this.timeInEvents.map(function (e) {
//     return e.date;
//   });

//   const payable = eligibleDates.reduce(
//     function (memo, d) {
//       return memo + wagesEarnedOnDate.call(this, d);
//     }.bind(this),
//     0
//   ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

//   return payable;
// }; im not very good i couldnt figure it out with this helper function 