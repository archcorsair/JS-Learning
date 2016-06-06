/*
 1. Write a JavaScript program to display the current day and time
 in the following format:
 Today is: Friday.
 Current time is: 4:53:34 PM/AM
*/

function printDay() {
  const myDate = new Date();
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const minutes = myDate.getMinutes();
  const seconds = myDate.getSeconds();
  let amPm = '';
  let hours = myDate.getHours();
  amPm = (hours < 12) ? 'AM' : 'PM';
  hours = (hours >= 12) ? hours - 12 : hours; // Convert to 12-hour format

  console.log(`Today is ${weekdays[myDate.getDay()]}`);
  console.log(`Current time: ${hours}:${minutes}:${seconds} ${amPm}`);
  console.log('Exercise #1 End\n');
}

printDay();
