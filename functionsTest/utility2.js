// This function returns the square of a number.
// Example: square(3) => 9
function square(x) {
  return x * x;
}

// This function returns the cube of a number.
// Example: cube(2) => 8
function cube(y) {
  return y * y * y;
}

// This function performs a basic arithmetic operation
// depending on the operator passed.
// Example: calculate(4, 2, '+') => 6
function calculate(num1, num2, operator) {
  if (operator === '-') {
    return num1 - num2;
  } else if (operator === '+') {
    return num1 + num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    return num1 / num2;
  } else {
    console.log('Invalid operator');
    return 0;
  }
}

// This function returns the result of raising a number to a power.
// Example: power(2, 3) => 8 (which means 2^3)
function power(base, exponent) {
  return Math.pow(base, exponent); // You can also use: base ** exponent
}

// This function checks if a number is even.
// Example: isEven(4) => true, isEven(5) => false
function isEven(n) {
  return n % 2 === 0;
}

// This function returns the factorial of a number.
// Factorial means multiplying all whole numbers from 1 to that number.
// Example: factorial(5) => 5 * 4 * 3 * 2 * 1 = 120
function factorial(n) {
  if (n < 0) {
    return undefined; // Factorial is not defined for negative numbers
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

// Exporting all functions so they can be used in other files
module.exports = {
  calculate,
  square,
  cube,
  power,
  isEven,
  factorial
};


