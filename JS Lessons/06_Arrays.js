let scores = new Array(); // creates an empty Array
let numbers = new Array(10); // creates an array with size 10
let emptyArray = [];
let myNumbers = new Array(1, 3, 6, 7, 10);
let colors = ['red', 'green', 'blue'];

console.log(scores);            // []
console.log(numbers);           // [ <10 empty items> ]
console.log(emptyArray);        // []
console.log(myNumbers);         // [ 1, 3, 6, 7, 10 ]
console.log(colors);            // [ 'red', 'green', 'blue' ]

// get second value of colors array
console.log(colors[1]);         // green

// add element to the end of Array
colors.push('white');
colors.push(5)
console.log(colors);            // [ 'red', 'green', 'blue', 'white', 5 ]

// how to add to the beginning of array
colors.unshift("orange");
console.log(colors);            // [ 'orange', 'red', 'green', 'blue', 'white', 5 ]

// LOOPS with Arrays
console.log('====LOOPS with Arrays=====');
for (let index = 0; index < colors.length; index++) {
    const element = colors[index];
    console.log(element);
}
console.log('=========');

for (const value of colors) {
    console.log(value);
}
console.log('====forEach=====');

colors.forEach(element => {
    console.log(element);
})
console.log('====multiple type of Data====');

// can we add multiple type of Data ? YES
let soupOfData = [5, 'cydeo', true, undefined, colors];
soupOfData.forEach(element => {
    console.log(typeof element);
    console.log(element);
    console.log('=========');
})