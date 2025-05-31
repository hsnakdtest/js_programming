/*
Inheritance is a fundamental concept in object-oriented programming that allows one class to acquire the properties and methods of another class.

In JavaScript (ES6 and above), inheritance is implemented using the extends and super keywords.

Key Points:
    • ✅ Inheritance creates an “is-a” relationship. For example, Student is a Person.
    • ✅ Use extends to make a child class inherit from a parent class.
    • ✅ The child class uses super() to call the parent class’s constructor.
    • ✅ Public properties and methods are inherited; private fields (declared with #) are not.
    • ❌ Constructors themselves are not inherited — you must define them in the subclass if needed.
    • ✅ Methods defined in the parent class can be reused or overridden in the child class.
*/

// Parent class (Person)
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

// Child class (Student) inherits from Person
class Student extends Person {
    constructor(name, age, gender, studentId) {
        super(name, age, gender); // Call the constructor of the parent class
        this.studentId = studentId;
    }

    study() {
        console.log(`${this.name} is studying`);
    }
}

// Child class (Teacher) inherits from Person
class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Create instances
let student = new Student('Henry', 25, 'Male', 'A01');
let teacher = new Teacher('Smith', 45, 'Male');

// Output
console.log(student);   // Output: Student { name: 'Henry', age: 25, gender: 'Male', studentId: 'A01' }

console.log(teacher);   // Output: Teacher { name: 'Smith', age: 45, gender: 'Male' }

student.eat();          // Output: Henry is eating

teacher.eat();          // Output: Smith is eating

student.study();        // Output: Henry is studying

teacher.teach();        // Output: Smith is teaching