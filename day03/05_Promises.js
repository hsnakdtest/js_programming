/**
 * Checks if a person is eligible to vote based on their age.
 *
 * @param {number} age - The age of the person to check.
 * @returns {Promise<string>} A promise that resolves with a string indicating eligibility if age is 18 or above,
 *                            or rejects with a string indicating ineligibility if age is below 18.
 */
let checkEligibleToVote = (age) => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve(`Eligible to vote with age ${age}`);
    } else {
      reject(`Not eligible to vote with age ${age}`);
    }
  });
};

checkEligibleToVote(15)
  .then(() => {
    console.log("Vote is allowed");
  })
  .catch((error) => {
    console.log("Vote is not allowed");
  });

/*
Promises can help us avoid using:
    Nested callbacks 
    Callback Hell
*/



async function findElement(locator) {
  let element = new Promise((resolve, reject) => {
    if (locator === "valid-locator") {
      resolve("Element found");
    } else {
      reject("Element not found");
    }
  });
  return element;
}




async function clickElement(locator) {
  findElement(locator)
  .then((foundMessage) => {
    console.log(foundMessage);
    console.log("Clicking the element..");
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
    console.log('Unable to click the element');
  });
}
async function runTest() {
  await clickElement('valid-locator');
  await clickElement('invalid-locator');
  }
  runTest();