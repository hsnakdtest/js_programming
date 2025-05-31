console.log('----------------- // typeof operator //---------------------');

let schoolName = 'CYDEO SCHOOL';

console.log(typeof schoolName);               // Output: string
console.log(typeof schoolName.length);        // Output: number

console.log(schoolName.length);               // Output: 12
console.log(schoolName.length - 1);           // Output: 11

console.log(schoolName[0]);                   // Output: C
console.log(schoolName[11]);                  // Output: L
console.log(schoolName[schoolName.length-1]); // Output: L
console.log(schoolName[schoolName.length]);   // Output: undefined
console.log(schoolName.charAt(1));            // Output: Y

console.log('----------------- // toLowerCase - toUpperCase //---------------------');

schoolName.toLowerCase(); 
console.log(schoolName);                      // Output: CYDEO SCHOOL

console.log(schoolName.toLowerCase);          // Output: [Function: toLowerCase]

schoolName = schoolName.toLowerCase(); 
console.log(schoolName);                      // Output: cydeo school

schoolName = schoolName.toUpperCase(); 
console.log(schoolName);                      // Output: CYDEO SCHOOL

console.log('----------------- // String Comparison (case insensitive) //---------------------');

let expectedText = 'JavaScript';
let actualText = 'JAVASCRIPT';

console.log(expectedText);                      // Output: JavaScript
console.log(actualText);                        // Output: JAVASCRIPT

console.log(expectedText === actualText);       // Output: false
console.log(expectedText.toLowerCase() === actualText.toLowerCase());   // Output: true


console.log('----------------- // replace //---------------------');

let s = 'Python Python';

s = s.replace("Python" , "JavaScript" )         // replaces the first matching
console.log(s);                                 // Output: JavaScript Python

s = s.replace(/Python/g, 'JavaScript');         // replaces the all matching (g is the global flag)
console.log(s);                                 // Output: JavaScript JavaScript

console.log('----------------- // Remove Digits From String //---------------------');

let str = 'ABCD12345EFGHI890GHIJKLMN12345OPQRSTUVWXYZ';

str = str.replace(/\d/g, '');                   
console.log(str);                               // Output: ABCDEFGHIGHIJKLMNOPQRSTUVWXYZ

console.log('----------------- // Iterate String Characters //---------------------');

let programmingLanguage = 'JavaScript';

for (let i = 0; i < programmingLanguage.length; i++) {
   console.log(programmingLanguage[i]);                           // Output: J A V A S C R I P T (one letter per line)
}

console.log('----------------- // Extract Domain From Email //---------------------');

let email = 'cydeoschool@gmail.com';

let domain = email.substring(email.indexOf('@') + 1, email.lastIndexOf('.'));
console.log(domain);                            // Output: gmail

console.log('----------------- // includes() //---------------------');

console.log(email.includes("gmail"));           // Output: true
console.log(email.includes("hotmail"));         // Output: false

console.log('----------------- // startsWith() //---------------------');

console.log(email.startsWith("cydeo"));           // Output: true
console.log(email.startsWith("hotmail"));         // Output: false

console.log('----------------- // endsWith() //---------------------');

console.log(email.endsWith("gmail.com"));           // Output: true
console.log(email.endsWith("hotmail.com"));         // Output: false


console.log('----------------- // trim() //---------------------');

let textWithSpaces = '   Hello World!   ';
console.log(textWithSpaces);                   // Output: '   Hello World!   '
console.log(textWithSpaces.trim());            // Output: 'Hello World!'

console.log('----------------- // indexOf() //---------------------');

let sentence = 'I love JavaScript';
console.log(sentence.indexOf('love'));         // Output: 2
console.log(sentence.indexOf('Java'));         // Output: 7
console.log(sentence.indexOf('Python'));       // Output: -1

console.log('----------------- // lastIndexOf() //---------------------');

let repeated = 'abc abc abc';
console.log(repeated.lastIndexOf('abc'));      // Output: 8

console.log('----------------- // substring() //---------------------');

let lang = 'JavaScript';
console.log(lang.substring(0, 4));             // Output: Java
console.log(lang.substring(4));                // Output: Script

console.log('----------------- // repeat() //---------------------');

let laugh = 'ha';
console.log(laugh.repeat(3));                  // Output: hahaha

console.log('----------------- // split() //---------------------');

let fullName = 'John Doe';
let nameParts = fullName.split(' ');
console.log(nameParts);                        // Output: ['John', 'Doe']

console.log('----------------- // charAt() //---------------------');

let city = 'Istanbul';
console.log(city.charAt(0));                   // Output: I
console.log(city.charAt(4));                   // Output: n




console.log('----------------- // String Concatenation //---------------------');

let employeeName = 'James';
let employeeAge = 35;

console.log('Employee name is: ' + employeeName);  // Output: Employee name is: James
console.log('Employee age is: ' + employeeAge);    // Output: Employee age is: 35

console.log('My name is ' + employeeName + ', and I am ' + employeeAge + ' years old.'); // Output: My name is James, and I am 35 years old.
console.log(`My name is ${employeeName}, and I am ${employeeAge} years old.`);          // Output: My name is James, and I am 35 years old.


console.log('--------------------------------------');

let str1 = 'Java';
let str2 = "Script";
let str3 = `awesome`;
let result;

result = "The result variable is : "+ str1 + ' ' + str2 + ' ' + str3 ;
console.log(result);    // Output: The result variable is : Java Script awesome

result = `The result variable is : ${str1} ${str2} ${str3}`;
console.log(result);    // Output: The result variable is : Java Script awesome

