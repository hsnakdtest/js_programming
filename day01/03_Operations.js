console.log(10 + 20);           // Output: 30
console.log(100 - 90);          // Output: 10
console.log(20 * 5);            // Output: 100
console.log(30 / 5);            // Output: 6
console.log(10 / 4);            // Output: 2.5
console.log(10 % 2);            // Output: 0

console.log('--------------------------');  // Output: --------------------------

let x = 1000;
console.log(x);                 // Output: 1000

x = 2000;
console.log(x);                 // Output: 2000

x += 100;
console.log(x);                 // Output: 2100

x -= 500;
console.log(x);                 // Output: 1600

x *= 2;
console.log(x);                 // Output: 3200

x /= 5;
console.log(x);                 // Output: 640

console.log(100 > 20);          // Output: true
console.log(100 < 20);          // Output: false
console.log(100 >= 20);         // Output: true
console.log(100 <= 20);         // Output: false

console.log(10 == 10);          // Output: true
console.log('100' == 100);      // Output: true   // data type is ignored, values match
console.log('100' === 100);     // Output: false  // data type is different (string vs number)

console.log(100 != '100');      // Output: false  // values are equal (data type is ignored)
console.log(100 !== '100');     // Output: true   // values are equal, but data types different

console.log(true && true);      // Output: true
console.log(true && false);     // Output: false
console.log(false && false);     // Output: false

console.log(true || true);      // Output: true
console.log(true || false);     // Output: true