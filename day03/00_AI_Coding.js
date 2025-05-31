// create a for loop that starts from 1 and ends at 10
for (let i = 1; i <= 10; i++) {
  console.log(i); // 1 2 3 4 5 6 7 8 9 10
}

// create an array of String and add 10 student name (first and last) to it
  let students = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Johnson', 'David Johnson', 'Emily Johnson', 'Michael Johnson', 'Sophia Johnson', 'Chloe Johnson', 'Olivia Johnson'];

  // display all the student names in the console
  console.log(students); // ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Johnson', 'David Johnson', 'Emily Johnson', 'Michael Johnson', 'Sophia Johnson', 'Chloe Johnson', 'Olivia Johnson']

  // set the first student name to Hsn Akd in the students array
  students[0] = 'Hsn Akd'; 
  console.log(students); // ['Hsn Akd', 'Jane Smith', 'Bob Johnson', 'Alice Johnson', 'David Johnson', 'Emily Johnson', '

  // add a new student name to the end of the students array
  students.push('Sara Johnson');
  console.log(students); // ['Hsn Akd', 'Jane Smith', 'Bob Johnson', 'Alice Johnson', 'David Johnson', 'Emily Johnson', 'Michael Johnson', 'Sophia Johnson', 'Chloe Johnson', 'Olivia Johnson', 'Sara Johnson']
console.log('----------------------------------------------------------------');

// display all the elements of the array in the reversed order
for (let i = students.length - 1; i >= 0; i--) {
    console.log(students[i]); // Outputs : Sara Johnson, Olivia Johnson, Chloe Johnson, Sophia Johnson, Michael Johnson, Emily Johnson, David Johnson, Alice Johnson,
}
console.log('----------------------------------------------------------------');

let email = 'hsnakdtest@gmail.com'

// check if the email address contains @gmail.com
if (email.includes('@gmail.com')) {
    console.log('The email address is valid'); // Outputs : The email address is valid
} else {
    console.log('The email address is invalid'); // Outputs : The email address is invalid
}
console.log('----------------------------------------------------------------');

// use string manupılation to retrive the domain of the mail like gmail not gmail.com
let domain = email.substring(email.indexOf('@') + 1, email.lastIndexOf('.'));
console.log(domain); // Outputs : gmail
console.log('----------------------------------------------------------------');

// write a program that can display the maximum and minimum numbers from the numbers array. do not use any build-in sort functions. console.log
let numbers = [10, 20, 30, 40, 50, 60, 70];
let maxNumber = numbers[0];
let minNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
    if (numbers[i] < minNumber) {
        minNumber = numbers[i];
    }
}
console.log("Max number:", maxNumber); // Outputs : Max number: 70
console.log("Min number:", minNumber); // Outputs : Min number: 10


console.log('----------------------------------------------------------------');

// write a program that can sort the unsorted numbers array in ascending order. do not use any built-in sort functions. print the sorted result
let unsortedNumbers = [25, 12, 30, 8, 10, 20, 5, 35, 15, 40];

for (let i = 0; i < unsortedNumbers.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < unsortedNumbers.length; j++) {
        if (unsortedNumbers[j] < unsortedNumbers[minIndex]) {
            minIndex = j;
        }
    }
    let temp = unsortedNumbers[i];
    unsortedNumbers[i] = unsortedNumbers[minIndex];
    unsortedNumbers[minIndex] = temp;
}
console.log("Sorted numbers:", unsortedNumbers); // Outputs : Sorted numbers: [5, 8, 10, 12, 15, 20, 25, 30, 35, 40]
console.log(`Sorted in ascending order: ${unsortedNumbers}`); // Outputs : Sorted in ascending order: [5, 8, 10, 12, 15, 20, 25, 30, 
console.log(`Sorted in descending order: ${unsortedNumbers.reverse()}`); // Outputs : Sorted in descending order: [40, 35, 30, 25, 20, 15,

console.log('----------------------------------------------------------------');

// write a program that can remove duplicates from the given array. print the results
  let arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9, 10];
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
      if (!uniqueArray.includes(arr[i])) {
          uniqueArray.push(arr[i]);
      }
  }
  console.log("Unique array:", uniqueArray); // Outputs : Unique array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  console.log('----------------------------------------------------------------');


/* 
Create a class named Item with the following requiremnts:
    Attributes:
        itemName, price, quantity
Methods:
    constructor: initializing all the fields
    calculateTotalPrice: returns the total price of the item (price * quantity)
    toString: returns a string representation of the item
*/
/**
 * Represents an item with a name, price, and quantity.
 */
class Item {
    /**
     * Creates a new Item instance.
     * @param {string} itemName - The name of the item.
     * @param {number} price - The price of a single unit of the item.
     * @param {number} quantity - The quantity of the item.
     */
    constructor(itemName, price, quantity) {
        this.itemName = itemName;
        this.price = price;
        this.quantity = quantity;
    }

    /**
     * Calculates the total price of the item based on its price and quantity.
     * @returns {number} The total price of the item.
     */
    calculateTotalPrice() {
        return this.price * this.quantity;
    }

    /**
     * Returns a string representation of the item.
     * @returns {string} A string containing the item's name, price, quantity, and total price.
     */
    toString() {
        return `Item: ${this.itemName}, Price: ${this.price}, Quantity: ${this.quantity}, Total Price: ${this.calculateTotalPrice()}`;
    }
}

// Create an instance of the Item class and print its details
let item1 = new Item("Laptop", 1500, 5);
console.log(item1.toString()); // Outputs : Item: Laptop, Price: 1500, Quantity: 5, Total Price: 7500

console.log('----------------------------------------------------------------');

// Create two more instances of the Item class and print their details
let item2 = new Item("Mouse", 200, 10);
console.log(item2.toString()); // Outputs : Item: Mouse, Price: 200, Quantity: 10, Total Price: 2000

let item3 = new Item("Keyboard", 100, 5);
console.log(item3.toString()); // Outputs : Item: Keyboard, Price: 100, Quantity: 5, Total Price: 500



console.log('----------------------------------------------------------------');


// create a new function that can reverse the given array and return the reversed array
/**
 * Reverses the order of elements in an array.
 * @param {Array} arr - The input array to be reversed.
 * @returns {Array} A new array with the elements in reverse order.
 */
function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length ; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}