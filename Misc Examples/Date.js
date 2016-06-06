// Date.now() returns current epoch time in miliseconds
const myDate = new Date(Date.now());
// Returns Date in Local String format -> 6/5/2016, 3:21:06 PM
console.log(myDate.toLocaleString());
// Returns Date in UTC String format -> Sun, 05 Jun 2016 22:21:06 GMT
console.log(myDate.toUTCString());
// Returns the day of the month -> 5
console.log(myDate.getDate());
// Returns the day of the week. 0 is sunday -> 0
console.log(myDate.getDay());
// Returns the full year. -> 2016
console.log(myDate.getFullYear());
// Returns int 0 to 11. 0 is January. -> 5
console.log(myDate.getMonth());
// Returns current epoch time in miliseconds
console.log(myDate.getTime());
