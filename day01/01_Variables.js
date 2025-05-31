// dynamic typing for variables

//	• var   : Declares a variable with function scope, allows redeclaration, and is hoisted (not recommended in modern JavaScript).
//	• let   : Declares a block-scoped variable that can be reassigned but not redeclared in the same scope.
//	• const : Declares a block-scoped variable that cannot be reassigned or redeclared, and must be initialized at the time of declaration.

// let name;
// let name = null; // represents intentional absense. considered as a bug in javascript

let programmingLanguage 
console.log(programmingLanguage);   // undefined

let programmingLanguage2 = 'Java';
console.log(programmingLanguage2);   // Java

/*
let programmingLanguage2 = 'JavaScript';
console.log(programmingLanguage2);   // SyntaxError: Identifier 'programmingLanguage2' has already been declared
*/

programmingLanguage2 = 'TypeScript';
console.log(programmingLanguage2);   // TypeScript

let school = 'CYDEO'; // string: '' or ""
console.log(school);              // CYDEO
console.log(typeof school);       // string

console.log('---------------------------------------');  // ---------------------------------------

let age = 35; // number: integer

console.log(age);                 // 35
console.log(typeof age);          // number

console.log('---------------------------------------');  // ---------------------------------------

let score = 8.5; // number: float

console.log(score);               // 8.5
console.log(typeof score);        // number

console.log('---------------------------------------');  // ---------------------------------------

let isEmployed = true; // boolean

console.log(isEmployed);          // true
console.log(typeof isEmployed);   // boolean

// no default values in JS, it's going to be 'Undefined'
console.log('---------------------------------------');  // ---------------------------------------

const NUMBER_OF_MONTHS_IN_A_YEAR = 12;
const NUMBER_OF_DAYS_IN_A_WEEK = 7;

console.log(NUMBER_OF_DAYS_IN_A_WEEK);     // 7
console.log(NUMBER_OF_MONTHS_IN_A_YEAR);   // 12

/*
NUMBER_OF_DAYS_IN_A_WEEK = 8;          // ❌ TypeError if uncommented
NUMBER_OF_MONTHS_IN_A_YEAR = 13;       // ❌ TypeError if uncommented

console.log(NUMBER_OF_DAYS_IN_A_WEEK);   // TypeError: Assignment to constant variable.
console.log(NUMBER_OF_MONTHS_IN_A_YEAR); // TypeError: Assignment to constant variable.
*/




if (true) {
    studentName = 'Hsn'; 
}
console.log(studentName);  // Output : Hsn

var studentName = 'Akd';
console.log(studentName);  // Output : Akd
