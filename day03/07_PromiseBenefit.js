async function getIntoCar() {
  return new Promise((resolve) => {
    console.log("Get into the car");
    resolve();
  });
}

async function startCar() {
  return new Promise((resolve) => {
    console.log("Car started");
    resolve();
  });
}

async function drive() {
  return new Promise((resolve) => {
    console.log("Driving the car");
    resolve();
  });
}

getIntoCar()
  .then(() => startCar())
  .then(() => drive())
  .finally(() => {
    console.log("Reached the destination");
  });
