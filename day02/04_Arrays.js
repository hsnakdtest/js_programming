let elements = ['James', 'Daniel', 1, 2, 3, 4, true, false, 5.5];

console.log(elements);                 // ['James', 'Daniel', 1, 2, 3, 4, true, false, 5.5]
console.log(elements.length);          // 9

console.log('--------------------------------');

let students = ['Shay', 'Yulia', 'Nijat', 'Belinda'];

console.log(students);                 // ['Shay', 'Yulia', 'Nijat', 'Belinda']
console.log(students[0]);              // Shay
console.log(students[1]);              // Yulia

students[2] = 'Breanna';
console.log(students);                 // ['Shay', 'Yulia', 'Breanna', 'Belinda']

students.push('Akd');
console.log(students);                 // ['Shay', 'Yulia', 'Breanna', 'Belinda', 'Akd']

students[students.length - 2] = "Hsn";
console.log(students);                 // ['Shay', 'Yulia', 'Breanna', 'Hsn', 'Akd']

console.log('--------------------------------');

let numbers = [45, 55, 65, 75, 80, 90, 100];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);           // each on separate line
}

console.log('--------------------------------');

for (let each of numbers) {
    console.log(each);                 // each on separate line
}

console.log('--------------------------------');

let employees = ['Aygun', 'Musabekhon', 'Nasera', 'Betul'];
console.log(employees);                // ['Aygun', 'Musabekhon', 'Nasera', 'Betul']

console.log('-------------- // push() // -------------'); // Adds an element to the end of the array

employees.push('Isabella');
console.log(employees);                // ['Aygun', 'Musabekhon', 'Nasera', 'Betul', 'Isabella']

console.log('-------------- // unshift() // -------------'); // Adds elements to the beginning of the array

employees.unshift('Daniel');
console.log(employees);                // ['Daniel', 'Aygun', 'Musabekhon', 'Nasera', 'Betul', 'Isabella']

employees.unshift('Ahmet');
employees.unshift('Mehmet');
employees.unshift('Ali');
employees.unshift('Veli');
console.log(employees);                // ['Veli', 'Ali', 'Mehmet', 'Ahmet', 'Daniel', 'Aygun', 'Musabekhon', 'Nasera', 'Betul', 'Isabella']

console.log('-------------- // splice() // -------------'); // Removes elements starting from a specific index

/*
employees.splice(1, 3, 'HASAN' );
console.log(employees);                // ['Veli', 'HASAN','Daniel', 'Aygun', 'Musabekhon', 'Nasera', 'Betul', 'Isabella']
*/
employees.splice(1, 3);
console.log(employees);                // ['Veli', 'Daniel', 'Aygun', 'Musabekhon', 'Nasera', 'Betul', 'Isabella']

console.log('-------------- // shift() // -------------'); // Removes the first element from the array
employees.shift();
console.log(employees);                // ['Daniel', 'Aygun', 'Musabekhon', 'Nasera', 'Betul', 'Isabella']

console.log('-------------- // pop() // -------------'); // Removes the last element from the array
employees.pop();
console.log(employees);                // ['Daniel', 'Aygun', 'Musabekhon', 'Nasera', 'Betul']

console.log('----------------------------------------------------------------');
console.log('----------------------------------------------------------------');
console.log('----------------------------------------------------------------');

let scores = new Array();                 
let numbersArray = new Array(10);         
let emptyArray = [];                      
let myNumbers = new Array(1, 3, 6, 7, 10); 
let colors = ['red', 'green', 'blue'];

console.log(scores);                      // []
console.log(numbersArray);               // [ <10 empty items> ]
console.log(emptyArray);                 // []
console.log(myNumbers);                  // [1, 3, 6, 7, 10]
console.log(colors);                     // ['red', 'green', 'blue']

console.log(colors[1]);                  // green

colors.push('white');
colors.push(5);
console.log(colors);                     // ['red', 'green', 'blue', 'white', 5]

colors.unshift('orange');
console.log(colors);                     // ['orange', 'red', 'green', 'blue', 'white', 5]

console.log('====LOOPS with Arrays=====');
for (let index = 0; index < colors.length; index++) {
    console.log(colors[index]);          // each on separate line
}
console.log('=========');

for (const value of colors) {
    console.log(value);                  // each on separate line
}

console.log('====forEach=====');
colors.forEach(element => {
    console.log(element);               // each on separate line
})

console.log('====multiple type of Data====');

let soupOfData = [5, 'cydeo', true, undefined, colors];

soupOfData.forEach(element => {
    console.log(typeof element);        // type
    console.log(element);               // value
    console.log('=========');           // separator
});