/*
** Write a function countBs that takes a string as its only argument and
** returns a number that indicates how many uppercase "B" characters are in the string.
*/

function countBs(input) {
  let bCount = 0;
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === 'B') {
      bCount++;
    }
  }
  return bCount;
}

console.log(countBs('But Bob, why is the boy so badly behaved?')); // returns 2
