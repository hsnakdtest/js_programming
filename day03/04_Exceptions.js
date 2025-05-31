console.log('Test started here');

try {
    console.log(result); // ⚠️ 'result' is not defined → ReferenceError
} catch (e) {
    console.log('An error has occurred during runtime');
    console.log(e); // Outputs the actual ReferenceError object
} finally {
    console.log('Error handling is completed');
}

console.log('Test ended here');


console.log('----------------------------------------------');

console.log('Second Test started here');

let browser = 'chrome';
browser = browser.toLowerCase();

if (browser == 'chrome' || browser == 'firefox' || browser == 'safari') {
    console.log('You are using a supported browser');
} else {
    throw new Error(`Invalid browser : ${browser}`);
}
    

console.log('Second Test ended here');

console.log('----------------------------------------------');

console.log('Third Test started here');

let newBrowser = 'edge';
newBrowser = newBrowser.toLowerCase();

if (newBrowser == 'chrome' || newBrowser == 'firefox' || newBrowser == 'safari') {
    console.log('You are using a supported browser');
} else {
    throw new Error(`Invalid browser : ${newBrowser}`);
}
    

console.log('Third Test ended here');

console.log('----------------------------------------------');


console.log('New Test Started here');

// throw new Error('Throwing a new error because something went wrong in the test');

console.log('Test is completed here');