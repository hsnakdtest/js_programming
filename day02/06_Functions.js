/* 
    - function must be declared before we call it and use it
    - need to use function keyword
    - must declare outside the class


    function functionName(parameter){
        statements
        console.log(`The value is ${parameter}`);
    }

    functionName();     // calling the function
    functionName(100);  // calling the function with parameter

*/
/* 
    no need to use any keyword
    must declare inside the class
*/



console.log('------------------------ // function // ------------------------------------');

function greetings() {
    console.log('Hello Programmers');      
    console.log('Hello Cydeo');            
    console.log('Hello World');            
}

greetings();
// Outputs:
// Hello Programmers
// Hello Cydeo
// Hello World

console.log("Test Complete");              // Outputs : Test Complete

console.log('------------------------------------------------------------');

greetings();
// Outputs:
// Hello Programmers
// Hello Cydeo
// Hello World

console.log('------------------------------------------------------------');

greetings();
// Outputs:
// Hello Programmers
// Hello Cydeo
// Hello World

console.log('Test Completed successfully'); // Outputs : Test Completed successfully

console.log('------------------------ // function with parameter // ------------------------------------');

function displayValue1(value) {
    console.log(`The value is ${value}`);
}
displayValue1();                             // Outputs : The value is undefined
displayValue1('TypeScript');                 // Outputs : The value is TypeScript

// Function with default parameter
function displayValue(value = 'Unknown value') {
    console.log(`The value is ${value}`);
}

displayValue(100);                          // Outputs : The value is 100
displayValue('JavaScript');                 // Outputs : The value is JavaScript
displayValue();                             // Outputs : The value is Unknown value

console.log('------------------------------------------------------------');

function square(number) {
    let result = number ** 2;
    return result;
}

let num = square(10);
console.log(`The square is : ${num}`);      // Outputs : The square is : 100

let num2 = square();                        // If not give the parameter it will undefined and result will be "NaN"
console.log(`The square is : ${num2}`);     // Outputs : The square is : NaN 

console.log('------------------------------------------------------------');
console.log('------------------------------------------------------------');
console.log('------------------------------------------------------------');

// no access modifier needed, no method overloading

function add(a, b) {
    console.log("Total is : " + (a + b));
}

add(10, 20);                                 // Outputs : Total is : 30


function add1(a, b, c = 0) {
    console.log("Total is : " + (a + b + c));
}

add1(10, 50);                                 // Outputs : Total is : 60
add1(10, 50, 40);                             // Outputs : Total is : 100

console.log('------------------------ // return values from function // ------------------------------------');

function square(number) {
    return number * number;
}
let result = square(20);
console.log(`Square is ${result}`);     // Outputs : Square is 400


function multiply(a, b) {
    return (a * b);
}

console.log('The result of multiplication : ' + multiply(10, 20)); // Outputs : The result of multiplication : 200


let divide = function (a, b) {
    return a / b;
};

console.log(divide(20, 10));                 // Outputs : 2


let anyName = divide;
console.log(anyName(20, 10));                // Outputs : 2

function average(a, b, fn) {
    return fn(a, b) / 2;
}

function sum(a, b) {
    return (a + b);
}

let averageOfTotal = average(10, 20, sum);
console.log(averageOfTotal);                 // Outputs : 15

let averageOfMultiply = average(10, 20, multiply);
console.log(averageOfMultiply);              // Outputs : 100