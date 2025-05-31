let checkEligibleToVote = (age) => {
  return new Promise((resolve, reject) => {
      if (age >= 18){
        resolve(`Eligible to vote with age ${age}`);
      } else {
        reject(`Not eligible to vote with age ${age}`);
      }
  });
};

checkEligibleToVote(15)
.then(() => {
  console.log('Vote is allowed');
})
.catch((error) => {
  console.log('Vote is not allowed');
});

/*
Promises can help us avoid using:
    Nested callbacks 
    Callback Hell
*/