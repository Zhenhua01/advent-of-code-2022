"use strict";

const { readData } = require("./readInputs");
const path = process.argv[2];

// AoC 2022 - Day 3 Challenge

/**
 */
async function rucksackOrg1(path) {
  const data = await readData(path);
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let sum = 0;
  let items = [];

  for (let row of data) {
    const c1 = row.slice(0, row.length / 2);
    const c2 = row.slice(row.length / 2);

    const compartment1 = frequency(c1);
    const compartment2 = frequency(c2);

    for (let key in compartment1) {
      if (compartment1[key] && compartment2[key]) items.push(key);
    }
  }

  for (let letter of items) {
    sum += letters.indexOf(letter) + 1;
  }

  console.log("rucksackOrg1 sum:", sum);
  return sum;
}

rucksackOrg1(path);


function frequency(string) {
  let freq = {};

  for (let letter of string) {
    freq[letter] = freq[letter] + 1 || 1;
  }

  return freq;
}


/**
 */
async function rucksackOrg2(path) {
  const data = await readData(path);
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let sum = 0;
  let items = [];

  for (let i = 0; i < data.length; i += 3) {
    const g1 = data[i];
    const g2 = data[i + 1];
    const g3 = data[i + 2];

    const group1 = frequency(g1);
    const group2 = frequency(g2);
    const group3 = frequency(g3);

    const groupLength = [g1.length, g2.length, g3.length];
    const shortest = Math.min(...groupLength);
    let smallestgroup;

    if (shortest === g1.length) {
      smallestgroup = group1;
    } else if (shortest === g2.length) {
      smallestgroup = group2;
    } else {
      smallestgroup = group3;
    }

    for (let key in smallestgroup) {
      if (group1[key] && group2[key] && group3[key]) items.push(key);
    }
  }

  for (let letter of items) {
    sum += letters.indexOf(letter) + 1;
  }

  console.log("rucksackOrg2 sum:", sum);
  return sum;
}

rucksackOrg2(path);


// node 3_rucksackOrg.js 3_input.txt