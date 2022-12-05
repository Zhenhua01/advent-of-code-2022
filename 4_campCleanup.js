"use strict";

const { readData } = require("./readInputs");
const path = process.argv[2];

// AoC 2022 - Day 4 Challenge

/**
 */
async function campCleanup1(path) {
  let data = await readData(path);
  data = data.map(row => row.split(','));
  let pairCount = 0;

  for (let row of data) {
    const [range1, range2] = row;
    let array1 = getArray(range1);
    let array2 = getArray(range2);

    const arrayLengths = [array1.length, array2.length];
    const shortest = Math.min(...arrayLengths);
    let tempCount = 0;
    let smallArr;
    let bigArr;

    if (shortest === array1.length) {
      smallArr = array1;
      bigArr = array2;
    } else {
      smallArr = array2;
      bigArr = array1;
    }

    for (let num of smallArr) {
      if (bigArr.includes(num)) {
        tempCount++;
      } else {
        break;
      }
    }

    if (tempCount === smallArr.length) pairCount++;
  }

  console.log("campCleanup1:", pairCount);
  return pairCount;
}

campCleanup1(path);


function getArray(range) {
  let [min, max] = range.split('-');
  let array = [];

  for (let i = +min; i <= +max; i++) {
    array.push(i);
  }

  return array;
}


/**
 */
async function campCleanup2(path) {
  let data = await readData(path);
  data = data.map(row => row.split(','));
  let pairCount = 0;

  for (let row of data) {
    const [range1, range2] = row;
    let array1 = getArray(range1);
    let array2 = getArray(range2);

    const arrayLengths = [array1.length, array2.length];
    const shortest = Math.min(...arrayLengths);
    let tempCount = 0;
    let smallArr;
    let bigArr;

    if (shortest === array1.length) {
      smallArr = array1;
      bigArr = array2;
    } else {
      smallArr = array2;
      bigArr = array1;
    }

    for (let num of smallArr) {
      if (bigArr.includes(num)) {
        pairCount++;
        break;
      }
    }
  }

  console.log("campCleanup2:", pairCount);
  return pairCount;
}

campCleanup2(path);


// node 4_campCleanup.js 4_input.txt