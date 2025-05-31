// ------------------ Product Class ------------------

class Product {
    constructor(name, price, quantity, description, productId) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
        this.productId = productId;
    }

    displayProductInfo() {
        console.log(`Product Name: ${this.name}`);
        console.log(`Product Price: ${this.price}`);
        console.log(`Product Quantity: ${this.quantity}`);
        console.log(`Product Description: ${this.description}`);
        console.log(`Product ID: ${this.productId}`);
    }
}

// Test Product
let product1 = new Product('Laptop', 1500, 5, 'High-end laptop with i7 processor', 'P001');
product1.displayProductInfo();
/*
Output:
Product Name: Laptop
Product Price: 1500
Product Quantity: 5
Product Description: High-end laptop with i7 processor
Product ID: P001
*/

console.log('----------------------------------------------------');

// ------------------ Animal Parent Class ------------------

class Animal {
    constructor(name, age, gender, breed) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

// Test Animal
let animal1 = new Animal('Eagle', 121, 'Male', 'Black');
animal1.eat();     // Eagle is eating
animal1.sleep();   // Eagle is sleeping
console.log(animal1.name); // Eagle

console.log('----------------------------------------------------');

// ------------------ Dog Subclass ------------------

class Dog extends Animal {
    constructor(name, age, gender, breed, color) {
        super(name, age, gender, breed);
        this.color = color;
    }

    bark() {
        console.log(`${this.name} is barking`);
    }
}

// Test Dog
let dog1 = new Dog('Max', 5, 'Male', 'Bulldog', 'White');
console.log(dog1);
/*
Dog {
  name: 'Max',
  age: 5,
  gender: 'Male',
  breed: 'Bulldog',
  color: 'White'
}
*/
dog1.eat();   // Max is eating
dog1.sleep(); // Max is sleeping
dog1.bark();  // Max is barking
console.log(dog1.name); // Max

console.log('----------------------------------------------------');

// ------------------ Cat Subclass ------------------

class Cat extends Animal {
    meow() {
        console.log(`${this.name} is meowing`);
    }
}

// Test Cat
let cat1 = new Cat('Poppy', 3, 'Female', 'Scottish');
console.log(cat1);
/*
Cat {
  name: 'Poppy',
  age: 3,
  gender: 'Female',
  breed: 'Scottish'
}
*/
cat1.eat();   // Poppy is eating
cat1.sleep(); // Poppy is sleeping
cat1.meow();  // Poppy is meowing
console.log(cat1.name); // Poppy