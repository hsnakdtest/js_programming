function square(x) {
  return x * x;
}

function cube(y) {
  return y * y * y;
}

function calculate(num1, num2, operator) {
    if (operator === '-') {
        return num1 - num2;
    } else if (operator === '+') {
        return num1 + num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    } else {
        console.log('Invalid operator');
        return 0;
    }
}

/*
In order to be able to use the members of one js file in another, 
first we export them and then import them into another file
*/


// module.exports = square;     // exports just one function

module.exports = {square, cube, calculate};   // exporting

/*
    Exporting functions in another way

        export function square(x) {
        return x * x;
        }

*/