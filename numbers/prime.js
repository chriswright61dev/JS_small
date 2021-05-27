// primes

let possiblePrimeList = [1, 2, 3];

// put in a loop for search limit and put times in an array to graph
let searchLimit = 19000;

let startTimeBrute = new Date();
brutePrimes = findPrimesBrute(searchLimit);
let endTimeBrute = new Date();
timeInMillisecondsBrute = timeTaken(startTimeBrute, endTimeBrute);
// console.log(brutePrimes);
console.log(timeInMillisecondsBrute);

let startTime = new Date();
primeList = findPrimes(searchLimit);
// primeList = findPrimes(searchLimit);
let endTime = new Date();
timeInMilliseconds = timeTaken(startTime, endTime);
// console.log(primeList);
console.log(timeInMilliseconds);

function findPrimes(searchLimit) {
  searchLimit = searchLimit / 6; // we used 6n+-1 to make the list
  for (n = 1; n < searchLimit; n++) {
    possiblePrimes(n);
  }
  return removeNonPrime(possiblePrimeList);
}

function possiblePrimes(n) {
  // Every prime number can represented in form of
  // 6n+1 or 6n-1 except 2 and 3, where n is natural number.
  // find possible primes based on n
  let higher = 6 * n + 1;
  let lower = 6 * n - 1;
  possiblePrimeList.push(lower);
  possiblePrimeList.push(higher);
}

function isPrime(num) {
  let prime = true;
  let primeLimit = Math.round(Math.sqrt(num) + 1);
  // only search up to square root of number
  for (let index = 3; index < primeLimit; index = index + 2) {
    if (num % index == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

function removeNonPrime(array) {
  return array.filter(number => isPrime(number));
}

function isPrimeBrute(number) {
  let isPrime = true;
  let primeLimit = Math.round(Math.sqrt(number) + 1);
  // only search up to square root of number
  for (let index = 2; index < primeLimit; index++) {
    if (number % index == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

function findPrimesBrute(searchLimit) {
  brutePrimeList = [];
  for (n = 1; n < searchLimit; n++) {
    if (isPrimeBrute(n)) {
      brutePrimeList.push(n);
    }
  }
  return brutePrimeList;
}

function timeTaken(startTimeInMs, endTimeInMs) {
  return (timeTakenText =
    endTimeInMs.getTime() - startTimeInMs.getTime() + " msec");
}
