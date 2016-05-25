// Rewrite math.min function
function min(n1, n2) {
  if (n1 < n2) {
    return n1;
  }
  return n2;
}

console.log(min(1, 2));

/*
Write a function isEven corresponding to:
-Zero is Even
-One is Odd
-For any other number N, its evenness is the same as N-2
The function should accept a number parameter and return a boolean
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
