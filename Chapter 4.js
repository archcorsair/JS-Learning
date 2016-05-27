// How to compute phi coefficient by example

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}
console.log(phi([76, 9, 4, 1]));

// Write a range function that takes two arguments, start and end, and returns
// an array containing all the numbers from start up to (and including) end.

const numbers = []; // called outside for sum function access
function range(start, end) {
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  return numbers;
}
console.log(range(1, 10)); // returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Next write a sum function that takes an array of numbers and returns the
// sum of these numbers.

function sum(array) {
  let sumOf = 0;
  for (let i = 0; i < array.length; i++) {
    sumOf += array[i];
  }
  return sumOf;
}
console.log(sum(numbers));

// Modify the range function to take an optional third argument that indicates
// the "step" value used to build up the array. If no step is given, the array
// elements go up by increments of one. Make sure it also works with negative
// step values.

// function bonusRange(start, end, step) {
//
// }
// work in progress
