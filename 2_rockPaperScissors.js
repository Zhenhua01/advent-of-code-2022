"use strict";

const { readData } = require("./readInputs");
const path = process.argv[2];

// AoC 2022 - Day 2 Challenge

/**
 */
async function rockPaperScissors1(path) {
  const data = await readData(path);
  let score = 0;

  for (let row of data) {
    const [elfHand, myHand] = row.split(" ");

    if (myHand === 'X') {
      score += 1;
    } else if (myHand === 'Y') {
      score += 2;
    } else {
      score += 3;
    }

    switch (elfHand) {
      case 'A':
        if (myHand === 'X') score += 3;
        if (myHand === 'Y') score += 6;
        if (myHand === 'Z') score += 0;
        break;

      case 'B':
        if (myHand === 'X') score += 0;
        if (myHand === 'Y') score += 3;
        if (myHand === 'Z') score += 6;
        break;

      case 'C':
        if (myHand === 'X') score += 6;
        if (myHand === 'Y') score += 0;
        if (myHand === 'Z') score += 3;
    }
  }

  console.log("RPS1:", score);
  return score;
}

rockPaperScissors1(path);


/**
 */
async function rockPaperScissors2(path) {
  const data = await readData(path);
  let score = 0;

  for (let row of data) {
    const [elfHand, round] = row.split(" ");

    switch (elfHand) {
      // rock
      case 'A':
        if (round === 'X') score += (3 + 0);
        if (round === 'Y') score += (1 + 3);
        if (round === 'Z') score += (2 + 6);
        break;

      // paper
      case 'B':
        if (round === 'X') score += (1 + 0);
        if (round === 'Y') score += (2 + 3);
        if (round === 'Z') score += (3 + 6);
        break;

      // scissor
      case 'C':
        if (round === 'X') score += (2 + 0);
        if (round === 'Y') score += (3 + 3);
        if (round === 'Z') score += (1 + 6);
    }
  }

  console.log("RPS2:", score);
  return score;
}

rockPaperScissors2(path);


// node 2_rockPaperScissors.js 2_input.txt