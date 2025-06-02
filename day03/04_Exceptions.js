console.log('Test-1 started here');

// 🔍 TEST 1 - Demonstrate try/catch/finally with an undefined variable
// 'result' is NOT defined, so this line will throw a ReferenceError
try {
    console.log(result);
} catch (error) {
    // This block will run if an error occurs in the try block
    console.log('An error has occurred during runtime');
    // Logs only the error message (not full stack trace)
    console.log(error.message);
} finally {
    // This block always runs no matter what (error or not)
    console.log('Error handling is completed');
}

console.log('Test-1 ended here');
console.log('----------------------------------------------');

console.log('Test-2 started here');

// 🔍 TEST 2 - Same test again but logging full error object instead of just message
try {
    console.log(result); // Still undefined
} catch (error) {
    console.log('An error has occurred during runtime');
    // Logs the full error object, including type and stack trace
    console.log(error);
}

console.log('Test-2 ended here');
console.log('----------------------------------------------');

console.log('Test-3 started here');

// 🔍 TEST 3 - Simulate browser check with a valid browser
let browser = 'Chrome';
browser = browser.toLowerCase(); // Normalize to lowercase

// Check if browser is supported
if (browser === 'chrome' || browser === 'firefox' || browser === 'safari') {
    console.log('You are using a supported browser');
} else {
    // If unsupported, manually throw an error
    throw new Error(`Invalid browser: ${browser}`);
}

console.log('Test-3 ended here');
console.log('----------------------------------------------');

console.log('Test-4 started here');

// 🔍 TEST 4 - Simulate browser check with an unsupported browser
let newBrowser = 'edge';
newBrowser = newBrowser.toLowerCase();

try {
    if (newBrowser === 'chrome' || newBrowser === 'firefox' || newBrowser === 'safari') {
        console.log('You are using a supported browser');
    } else {
        throw new Error(`Invalid browser: ${newBrowser}`);
    }
} catch (error) {
    console.error('❌ Browser Error:', error.message);
}

console.log('Test-4 ended here');
console.log('----------------------------------------------');

console.log('Test-5 started here');

// 🔍 TEST 5 - Manually throwing an error (currently commented out)
// Use this to simulate a test failure on purpose
// throw new Error('Throwing a new error because something went wrong in the test');

console.log('Test-5 is completed here');
console.log('----------------------------------------------');

console.log('Test-6 started here');

try {
    let num1 = 10;
    let num2 = 0;
    let operator = '/';

    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
        throw new Error("Invalid number input");
    }

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                throw new Error("Division by zero is not allowed");
            }
            result = num1 / num2;
            break;
        default:
            throw new Error("Invalid operator selected (use +, -, *, /)");
    }

    console.log(`✅ Result: ${num1} ${operator} ${num2} = ${result}`);
} catch (error) {
    console.error('❌ Error:', error.message);
} 

    console.log('Test-6 ended here');
