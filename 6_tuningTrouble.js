"use strict";

const { readData } = require("./readInputs");
const path = process.argv[2];

// AoC 2022 - Day 6 Challenge

/**
 */
async function tuningTrouble1(path) {
  let data = await readData(path);
  data = data[0];
  let array = [];

  for (let i = 0; i <= 3; i++) {
    array.push(data[i]);
  }

  if (checkUnique1(array)) {
    console.log(4);
    return 4;
  }

  for (let i = 4; i < data.length; i++) {
    array.shift();
    array.push(data[i]);

    if (checkUnique1(array)) {
      console.log("marker1:", i + 1);
      return i;
    }
  }
}

tuningTrouble1(path);


function checkUnique1(array) {
  const unique = new Set(array);

  if (unique.size === 4) {
    return true;
  } else {
    return false;
  }
}

function checkUnique2(array) {
  const unique = new Set(array);

  if (unique.size === 14) {
    return true;
  } else {
    return false;
  }
}


/**
 */
 async function tuningTrouble2(path) {
  let data = await readData(path);
  data = data[0];
  let array = [];

  for (let i = 0; i <= 13; i++) {
    array.push(data[i]);
  }

  if (checkUnique2(array)) {
    console.log(14);
    return 14;
  }

  for (let i = 14; i < data.length; i++) {
    array.shift();
    array.push(data[i]);

    if (checkUnique2(array)) {
      console.log("marker2:", i + 1);
      return i;
    }
  }
}

tuningTrouble2(path);


// node 6_tuningTrouble.js 6_input.txt