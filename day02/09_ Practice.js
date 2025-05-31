// Create an array of String and add 10 student names to it
let students = ['James', 'John', 'John', 'John', 'Brown', 'Yulia'];

// Display all the student names in the console
console.log(students);

// set the first student name to Muhtar in the students array
students[0] = 'Muhtar';
console.log(students);

// Add a new student name to the end of the students array
students.push('Shay');
console.log(students);

// set the last student name to Kuzzat in the students array
students[students.length - 1] = 'Kuzzat';


console.log('----------------------------------------------------------------');

// display all the elements of the array in the reversed order
for (let i = students.length - 1; i >= 0; i--) {
    console.log(students[i]);
}

console.log('----------------------------------------------------------------');

let email = 'CydeoSchool@gmail.com'

// check if the email address contains @gmail.com
if (email.includes('@gmail.com')) {
    console.log('The email address is valid');
} else {
    console.log('The email address is invalid');
}

console.log('-------------------------');

// create an array of integers and add 7 numbers to it
let numbers = [10, 2, 3, 4, 5, 6, 15, 16, 0, -5, 20];

// user for of loop to print each element
for (let num of numbers) {
    console.log(num);
}

console.log('-------------------------');

// write a program that can display the maximum and minimum numbers from the numbers array
let maxNumber = numbers[0];
let minNumber = numbers[0];

for (let num of numbers) {
    if (num > maxNumber) {
        maxNumber = num;
    }

    if (num < minNumber) {
        minNumber = num;
    }
}

console.log('Maximum number:', maxNumber);
console.log('Minimum number:', minNumber);

console.log('-------------------------');

// create an array of integers with 10 integers in it and the array is in an unsorted order
let unsortedNumbers = [25, 12, 30, 8, 10, 20, 5, 35, 15, 40];

// write a program that can sort the unsorted numbers array in ascending order. DO NOT use any built-in sort functions
for (let i = 0; i < unsortedNumbers.length - 1; i++) {
    for (let j = 0; j < unsortedNumbers.length - i - 1; j++) {
        if (unsortedNumbers[j] > unsortedNumbers[j + 1]) {
            let temp = unsortedNumbers[j];
            unsortedNumbers[j] = unsortedNumbers[j + 1];
            unsortedNumbers[j + 1] = temp;
        }
    }
}

console.log(unsortedNumbers);


console.log('-------------------------');

/*
Create a class named Item with the following requirements:
    Attributes:
        name, price, quantity

    Methods:
        constructor: to initialize all attributes
        calculateTotalPrice: to calculate and return the total price of the item (price * quantity)
        toString:
*/
class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    calculateTotalPrice() {
        return this.price * this.quantity;
    }

    toString() {
        return `Item: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Total Price: ${this.calculateTotalPrice()}`;
    }
}
