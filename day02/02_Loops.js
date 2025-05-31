console.log('====For Loop with Var Statement before ES6=====');
// Output: ====For Loop with Var Statement before ES6=====
for(var j = 0 ; j <= 5 ; j++ ){
    console.log(j);
}
// Output:
// 0
// 1
// 2
// 3
// 4
// 5

console.log('==== // Var Statement //=====');
console.log(j); 
// Output: 6  (because `var` is function-scoped or globally scoped if outside function)

console.log('==== // For Loop // =====');
for (let i = 0; i < 5; i++) {
    console.log('Wooden Spoon ' + (i+1));
}
// Output:
// Wooden Spoon 1
// Wooden Spoon 2
// Wooden Spoon 3
// Wooden Spoon 4
// Wooden Spoon 5

console.log('----------------------');

for (let i = 5; i <= 15; i++) { 
    console.log(i);
}
// Output:
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15

console.log('----------------------');

for (let i = 0; i < 5; i++) { 
    console.log('Hello World');
    console.log('Wooden Spoon');
    console.log('------------');
}
// Output (repeats 5 times):
// Hello World
// Wooden Spoon
// ------------

console.log('----------// break //------------');

for (let i = 1; i < 6; i++) { 
    console.log(i);
    if (i==3) {
        break; // terminates the current loop
    }
}
// Output:
// 1
// 2
// 3

console.log('--------- // continue // -------------');

for (let i = 1; i < 11; i++) { 
    if (i==3 || i==7) {
        continue; // skips the iteration
    }
    console.log(i);
}
// Output:
// 1
// 2
// 4
// 5
// 6
// 8
// 9
// 10

console.log('----------------------');

for (let i = 10; i <= 20; i++) { 
    console.log(i);
}
// Output:
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20

console.log('----------------------');

let students = ['John', 'Jane', 'Bob', 'Alice', 'David', 'Emily', 'Michael', 'Sophia', 'Chloe', 'Olivia'];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
// Output:
// John
// Jane
// Bob
// Alice
// David
// Emily
// Michael
// Sophia
// Chloe
// Olivia

console.log('----------------------');

console.log('==== // While Loop //=====');
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}
// Output:
// 0
// 1
// 2

console.log('==== // Do While Loop // =====');
let z = 0;
do {
    console.log(z);
    z++;
} while (z < 3);
// Output:
// 0
// 1
// 2