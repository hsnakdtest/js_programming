// STUDENT CLASS
class Student {
    constructor(studentName, age, gender, salary, jobTitle) {
        this.studentName = studentName;
        this.age = age;
        this.gender = gender;
        this.salary = salary;
        this.jobTitle = jobTitle;
    }
}

// Create student object with default values
let student0 = new Student();
console.log(student0);
// Output: Student {studentName: undefined, age: undefined, gender: undefined, salary: undefined, jobTitle: undefined}

let student1 = new Student('Mike');
console.log(student1);
// Output: Student {studentName: 'Mike', age: undefined, gender: undefined, salary: undefined, jobTitle: undefined}


// EMPLOYEE CLASS
class Employee {
    constructor(employeeName = 'Unknown', age = 0, gender = 'Unknown', salary = 50_000, jobTitle = 'Employee') {
        this.employeeName = employeeName;
        this.age = age;
        this.gender = gender;
        this.salary = salary;
        this.jobTitle = jobTitle;
    }

    work() {
        console.log(`${this.employeeName} is working`);
    }

    static myStaticMethod() {
        console.log("Static method called.");
    }

    static myStaticVariable = 'Company Employee';
    static myStaticVariable2;

}

// Creating employee0 and manually assigning values
let employee0 = new Employee();
employee0.employeeName = 'James';
employee0.age = 41;
employee0.salary = 18000;
employee0.jobTitle = 'QAE';
employee0.gender = 'Male';

console.log(employee0);
// Output: Employee { employeeName: 'James', age: 41, gender: 'Male', salary: 18000, jobTitle: 'QAE' }


let employee1 = new Employee();
console.log(employee1);
// Output: Employee { employeeName: 'Unknown', age: 0, gender: 'Unknown', salary: 50000, jobTitle: 'Employee' }


let employee2 = new Employee('Ricky', 35, 'Female', 100_000, 'Developer');
console.log(employee2);
// Output: Employee { employeeName: 'Ricky', age: 35, gender: 'Female', salary: 100000, jobTitle: 'Developer' }


let employee3 = new Employee();
console.log(employee3);
// Output: Employee { employeeName: 'Unknown', age: 0, gender: 'Unknown', salary: 50000, jobTitle: 'Employee' }


let employee4 = new Employee('Michael');
console.log(employee4);
// Output: Employee { employeeName: 'Michael', age: 0, gender: 'Unknown', salary: 50000, jobTitle: 'Employee' }


let employee5 = new Employee('Josh', 40);
console.log(employee5);
// Output: Employee { employeeName: 'Josh', age: 40, gender: 'Unknown', salary: 50000, jobTitle: 'Employee' }


// Calling instance method
employee2.work();   // Output: Ricky is working
employee4.work();   // Output: Michael is working

// Calling static method
Employee.myStaticMethod();  // Output: Static method called.

// Accessing static variable
console.log(Employee.myStaticVariable);     // Output: Company Employee
console.log(Employee.myStaticVariable2);    // Output: undefined