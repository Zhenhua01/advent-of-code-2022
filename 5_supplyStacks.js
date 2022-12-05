"use strict";

const { readData } = require("./readInputs");
const path = process.argv[2];

// AoC 2022 - Day 5 Challenge

/**
 */
async function supplyStacks1(path) {
  const data = await readData(path);
  const moves = data.splice(10); // update depending on input size
  // let stacks = [['Z', 'N'], ['M', 'C', 'D'], ['P']];
  let stacks = [
    ['R', 'N', 'P', 'G'],
    ['T', 'J', 'B', 'L', 'C', 'S', 'V', 'H'],
    ['T', 'D', 'B', 'M', 'N', 'L'],
    ['R', 'V', 'P', 'S', 'B'],
    ['G', 'C', 'Q', 'S', 'W', 'M', 'V', 'H'],
    ['W', 'Q', 'S', 'C', 'D', 'B', 'J'],
    ['F', 'Q', 'L'],
    ['W', 'M', 'H', 'T', 'D', 'L', 'F', 'V'],
    ['L', 'P', 'B', 'V', 'M', 'J', 'F']
  ];

  for (let move of moves) {
    const [, num, , from, , to] = move.split(" ");

    for (let i = 0; i < +num; i++) {
      stacks[+to - 1].push(stacks[+from - 1].pop());
    }
  }

  let message = [];

  for (let stack of stacks) {
    message.push(stack.pop());
  }

  console.log("supplyStacks1:", message.join(""));
  return message.join("");
}

supplyStacks1(path);


/**
 */
async function supplyStacks2(path) {
  const data = await readData(path);
  const moves = data.splice(10); // update depending on input size
  // let stacks = [['Z', 'N'], ['M', 'C', 'D'], ['P']];
  let stacks = [
    ['R', 'N', 'P', 'G'],
    ['T', 'J', 'B', 'L', 'C', 'S', 'V', 'H'],
    ['T', 'D', 'B', 'M', 'N', 'L'],
    ['R', 'V', 'P', 'S', 'B'],
    ['G', 'C', 'Q', 'S', 'W', 'M', 'V', 'H'],
    ['W', 'Q', 'S', 'C', 'D', 'B', 'J'],
    ['F', 'Q', 'L'],
    ['W', 'M', 'H', 'T', 'D', 'L', 'F', 'V'],
    ['L', 'P', 'B', 'V', 'M', 'J', 'F']
  ];

  for (let move of moves) {
    const [, num, , from, , to] = move.split(" ");

    stacks[+to - 1].push(...stacks[+from - 1].splice(stacks[+from - 1].length - +num));
  }

  let message = [];

  for (let stack of stacks) {
    message.push(stack.pop());
  }

  console.log("supplyStacks2:", message.join(""));
  return message.join("");
}

supplyStacks2(path);


// node 5_supplyStacks.js 5_input.txt