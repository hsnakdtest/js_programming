// Import all utility functions from the files - It is not to good way to import function
const utility = require("./07_Utility");
const test = require('../functionsTest/utility');

// Using the calculate function from utility
let calculation = utility.calculate(20, 40, '+');
console.log(calculation);                   // Output: 60

// Using the cube function from utility file
let cube = utility.cube(3);
console.log(cube);                          // Output: 27

// Using the square function from utility file
console.log(utility.square(5));             // Output: 25

// Using the calculate function from test1 file
console.log(test.calculate(10, '+', 20));   // Output: 30


console.log('---------- // Specific Function Import // ----------');

// ✅ Correct: Import only the factorial function from test2.js using destructuring
const { factorial } = require('../functionsTest/utility2');

// Use the factorial function
let factorialResult = factorial(5);
console.log(factorialResult);               // Output: 120

// ❌ Incorrect: Trying to use isEven without importing it
// let isEvenResult = isEven(5);
// console.log(isEvenResult);

// ✅ Correct: To use isEven, you must also import it from the same file
// Here's the corrected version with both functions imported:
const { isEven } = require('../functionsTest/utility2');

let isEvenResult = isEven(5);
console.log(isEvenResult);                  // Output: false

