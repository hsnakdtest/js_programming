console.log("--------------// if statements //--------------------"); 
let score = 80;
let limit = 60;

if(score > limit) {
    console.log('Congrats! You passed the exam');   // Output: Congrats! You passed the exam
}
if(score > limit) {
    console.log('Congrats! You \'passed\' the exam');   // Output: Congrats! You 'passed' the exam
}
if(score > limit) {
    console.log("Congrats! You 'passed' the exam");   // Output: Congrats! You 'passed' the exam
}
if(score > limit) {
    console.log('Congrats! You "passed" the exam');   // Output: Congrats! You "passed" the exam
}
if(score > limit) {
    console.log("Congrats! You \"passed\" the exam");   // Output: Congrats! You "passed" the exam
}


console.log("--------------// if else statements //--------------------"); 


let score1 = 50;
let limit1 = 60;
if(score1 > limit1) {
    console.log('Passed');
}else{
    console.log('Failed');      // Output: Failed
}

console.log("--------------// Multi-branch If statements //--------------------"); 

let grade = 85;
let result = 'Grade: ';

if (grade >= 90) {
  result += 'A';
} else if (grade >= 80) {
    result += 'B';
} else if (grade >= 70) {
    result += 'C';
} else if (grade >= 60) {
    result += 'D';
} else {
    result += 'F';
}
console.log(result); // Output: Grade: B

console.log("--------------// nested if statements //--------------------"); 
score = 80;

if (score >= 0 && score <= 100) {
  // pass or failed
  if (score >= 60) {
    console.log("Passed");     // Output: Passed
  } else {
    console.log("Failed");
  }
  
} else {
  console.log("Invalid");
}

console.log("----------------------------------"); 

let num1 = 100;
let num2 = 10;

// Ternary operator
maxNumber = num1 > num2 ? num1 : num2 ;

console.log('===ternary result====='); 
console.log(maxNumber);               // Output: 100

console.log('===switch statements====='); 
let month = 4;
let dayCount;
switch (month) {
    case 2:
        dayCount = 28;
        break;
    case 1:
        dayCount = 31;
        break;
    case 4:
        dayCount = 30;
        break;    
    default:
        dayCount = -1;
        break;
}
console.log(dayCount);  // Output: 30

console.log("----------------------------------"); 