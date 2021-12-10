const { performance } = require("perf_hooks");

function factorial(num) {
  if (num < 0) {
    throw new Error("num must not be negative");
  }
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

const startTime = performance.now();

const factorialUntil = 120;

const factorialResult = factorial(factorialUntil);

console.log("----------------------------------------------");
console.log(`The factorial result was: ${factorialResult}`);
console.log("----------------------------------------------");

const endTime = performance.now();

const timeDuration = endTime - startTime;

console.log();

console.log("----------------------------------------------");
console.log(
  `Call to factorial(${factorialUntil}) took ${timeDuration} milliseconds`
);
console.log("----------------------------------------------");
