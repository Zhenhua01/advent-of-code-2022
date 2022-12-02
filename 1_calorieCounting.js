"use strict";

const { readData } = require("./readInputs");
const path = process.argv[2];

// AoC 2022 - Day 1 Challenge

/**
 */
async function calorieCounting1(path) {
  const data = await readData(path);
  let sum = 0;
  let maxCal = 0;

  for (let val of data) {
    if (val === '') {
      maxCal = Math.max(maxCal, sum);
      sum = 0;
    } else {
      sum += +val;
    }
  }

  maxCal = Math.max(maxCal, sum);

  console.log("calorieCounting1:", maxCal);
  return maxCal;
}

calorieCounting1(path);


/**
 */
async function calorieCounting2(path) {
  const data = await readData(path);
  let calories = [];
  let sum = 0;

  for (let val of data) {
    if (val === '') {
      calories.push(sum);
      sum = 0;
    } else {
      sum += +val;
    }
  }

  calories.push(sum);
  calories.sort((a, b) => (b - a));
  const topThree = calories.slice(0, 3);

  let topThreeSum = 0;
  for (let val of topThree) {
    topThreeSum += val;
  }

  console.log("calorieCounting2:", topThreeSum);
  return topThreeSum;

}

calorieCounting2(path);


// node 1_calorieCounting.js 1_input.txt