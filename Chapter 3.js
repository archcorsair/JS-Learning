// Rewrite math.min function
function min(n1, n2) {
  if (n1 < n2) {
    return n1;
  }
  return n2;
}

console.log(min(1, 2)); // returns 1

/*
** Write a function isEven corresponding to:
** -Zero is Even
** -One is Odd
** -For any other number N, its evenness is the same as N-2
** The function should accept a number parameter and return a boolean
*/

function isEven(input) {
  if (input === 0) {
    return true;
  } else if (input === 1 || input < 0) {
    return false;
  }
  return isEven(input - 2);
}

console.log(isEven(50)); //returns true
console.log(isEven(75)); //returns false
console.log(isEven(-1)); //returns false

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

/*
** Next write a function called countChar that behaves like countBs, except it
** takes a second argument that indicates the chatacter that is to be counted
*/

function countChar(input, char) {
  let charCount = 0;
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === char) {
      charCount++;
    }
  }
  return charCount;
}

console.log(countChar('CNN is a source for world news.', 'N')); // returns 2
