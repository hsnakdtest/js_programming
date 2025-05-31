// 'let' variables cannot be re-declared within the same scope
let school = 'CYDEO';
console.log(school); // Output: CYDEO

/*
let school = 'MIT'; // ❌ ERROR: Identifier 'school' has already been declared
console.log(school); // Output : SyntaxError: Identifier 'school' has already been declared
*/

// ------------------------------------------------------------

if (true) {
    let a = 200; // 'a' is only accessible inside this block
}

// console.log(a); // ❌ ERROR: a is not defined outside the block

// Explanation: 'let' is block-scoped. The variable 'a' only exists inside the if block.

// ------------------------------------------------------------

console.log('--------------------------------------------------------');

// 'var' allows re-declaration of the same variable
var country = 'Japan';
console.log(country); // Output: Japan

var country = 'Korea'; // ✅ Allowed: 'var' can be re-declared
console.log(country); // Output: Korea

if (true) {
    var b = 200; // 'var' is function-scoped, not block-scoped
}

console.log(b); // ✅ Output: 200
// Even though 'b' was declared inside the block, it's still accessible outside


console.log('--------------------------------------------------------');


