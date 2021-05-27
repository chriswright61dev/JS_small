// adding up a range numbers
// 1 simple
// 2 gauss

// const selectElement = document.querySelector("#sumInputs");
const selectElement = document.querySelector("#calculateNow");

// look for change in form input
// selectElement.addEventListener("change", event => {
//   formValues();
// });

// check calculate now button
selectElement.addEventListener("click", event => {
  // console.log("button was clicked");
  formValues();
});

const formValues = () => {
  const startValue = parseInt(document.getElementById("startInput").value);
  const endValue = parseInt(document.getElementById("endInput").value);
  compareSumMethods(startValue, endValue);
};

const writeToDiv = (appendedDiv, result, timeTaken, message) => {
  outputDiv = document.getElementById(appendedDiv);
  outputDiv.innerHTML = `${message} result is ${result} <br />and the time taken to calculate was ${timeTaken}<br /><br />`;
};

function timeTaken(startTimeInMs, endTimeInMs) {
  return (timeTakenText =
    endTimeInMs.getTime() - startTimeInMs.getTime() + " msec");
}

// sum from startvalue  to endvalue
const sumRange = (startValue, endValue) => {
  let startTime = new Date();
  let sumValue = 0;
  for (let i = startValue; i <= endValue; i++) {
    sumValue = sumValue + i;
  }
  const message = "<br />brute force";
  let endTime = new Date();
  timeInMilliseconds = timeTaken(startTime, endTime);
  writeToDiv("brute", sumValue, timeInMilliseconds, message);
  return sumValue;
};

const sumRangeGauss = (startValue, endValue) => {
  let startTime = new Date();
  let sumStep = startValue + endValue;
  const rangeDifference = endValue - startValue;
  let steps = 0;
  let lastValue = 0;
  let SumValue = 0;
  if (sumStep % 2 === 0) {
    // an extra number
    sumStep = startValue + endValue - 1;
    steps = parseInt(rangeDifference / 2);
    lastValue = endValue;
  } else {
    // paired up numbers
    sumStep = startValue + endValue;
    steps = Math.round(rangeDifference / 2);
  }
  let endTime = new Date();
  timeInMilliseconds = timeTaken(startTime, endTime);
  sumValue = sumStep * steps + lastValue;
  const message = "<br />gauss method";
  writeToDiv("gauss", sumValue, timeInMilliseconds, message);
  return sumValue;
};

const compareSumMethods = (start, finish) => {
  const outputDiv = document.getElementById("answerMatches");
  const bruteResult = sumRange(start, finish);
  const gaussResult = sumRangeGauss(start, finish);
  if (bruteResult == gaussResult) {
    outputDiv.innerHTML = "results match";
  } else {
    outputDiv.innerHTML = "ERROR results do not match - over the limit  ";
  }
};
// 134217730
